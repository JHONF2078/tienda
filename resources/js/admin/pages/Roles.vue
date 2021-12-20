<template>
    <div>
        <div class="content">
            <div class="container-fluid">
                <!--~~~~~~~ TABLE ONE ~~~~~~~~~-->
                <div
                    class="_1adminOverveiw_table_recent _box_shadow _border_radious _mar_b30 _p20"
                >
                    <p class="_title0">
                        Roles
                        <Button @click="addModal = true">
                            <Icon type="md-add" />Add Role</Button
                        >
                    </p>

                    <div class="_overflow _table_div">
                        <table class="_table">
                            <!-- TABLE TITLE -->
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Create at</th>
                                <th>Action</th>
                            </tr>
                            <!-- TABLE TITLE -->

                            <!-- ITEMS -->
                            <tr
                                v-for="(role, i) in roles"
                                :key="i"
                                v-if="roles.length"
                            >
                                <td>{{ role.id }}</td>
                                <td class="_table_name">
                                    {{ role.name }}
                                </td>
                                <td>{{ role.created_at }}</td>
                                <td>
                                    <Button
                                        type="info"
                                        size="small"
                                        @click="showEditModal(role, i)"
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        type="error"
                                        size="small"
                                        @click="showDeletingModal(role, i)"
                                        :loading="role.isDeleting"
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                            <!-- ITEMS -->
                        </table>
                    </div>
                </div>

                <!-- start produc adding modal -->

                <Modal
                    v-model="addModal"
                    title="Add Role"
                    :mask-closable="false"
                    :closable="false"
                >
                    <Input v-model="data.name" placeholder="Add Role name" />

                    <div slot="footer">
                        <Button type="default" @click="addModal = false"
                            >Close</Button
                        >
                        <Button
                            type="primary"
                            @click="addrole"
                            :disabled="isAdding"
                            :loading="isAdding"
                            >{{ isAdding ? "Adding.." : "Add Role" }}</Button
                        >
                    </div>
                </Modal>

                <!-- end role adding modal -->

                <!-- start produc editing modal -->

                <Modal
                    v-model="editModal"
                    title="Edit role"
                    :mask-closable="false"
                    :closable="false"
                >
                    <Input
                        v-model="editData.name"
                        placeholder="Edit Role name"
                    />

                    <div slot="footer">
                        <Button type="default" @click="editModal = false"
                            >Close</Button
                        >
                        <Button
                            type="primary"
                            @click="editrole"
                            :disabled="isAdding"
                            :loading="isAdding"
                            >{{
                                isAdding ? "Editing.." : "Edit Role"
                            }}</Button
                        >
                    </div>
                </Modal>

                <!-- end produc editing modal -->

                  <!-- start produc delete alert modal -->

                <Modal v-model="showDeleteModal" width="360">
                    <p slot="header" style="color: #f60; text-align: center">
                        <Icon type="ios-information-circle"></Icon>
                        <span>Delete confirmation</span>
                    </p>
                    <div style="text-align: center">
                        <p>
                            Are you sure you want to delete role?
                        </p>
                    </div>
                    <div slot="footer">
                        <Button
                            type="error"
                            size="large"
                            long
                            :loading="isDeleting"
                            :disabled="isDeleting"
                            @click="deleterole"
                            >Delete</Button
                        >
                    </div>
                </Modal>

                  <!-- end produc delete alert modal -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: {
                name: "",
            },
            addModal: false,
            editModal: false,
            isAdding: false,
            roles: [],
            editData: {
                name: "",
            },
            index: -1,
            showDeleteModal:false,
            isDeleting:false,
            deleteItem: {},
            deletingIndex:-1

        };
    },
    methods: {
        async addrole() {
            if (this.data.name.trim() == "")
                return this.error("Role name is required");
            const res = await this.callApi(
                "post",
                "app/create_role",
                this.data
            );
            if (res.status === 201) {
                this.roles.unshift(res.data); //añade los elementos pasados al inicio del array
                this.success("Role has beeen added successfully");
                this.addModal = false;
                this.data.name = "";
            } else {
                if (res.status == 422) {
                    if (res.data.errors.name) {
                        this.error(res.data.errors.name[0]);
                    }
                } else {
                    this.swr();
                }
            }
        },
        async editrole() {
            if (this.editData.name.trim() == "")
                return this.error("Role name is required");
            const res = await this.callApi(
                "post",
                "app/edit_role",
                this.editData
            );
            if (res.status === 200) {
                this.roles[this.index].name = this.editData.name;
                this.success("Role has beeen edited successfully");
                this.editModal = false;
            } else {
                if (res.status == 422) {
                    if (res.data.errors.name) {
                        this.error(res.data.errors.name[0]);
                    }
                } else {
                    this.swr();
                }
            }
        },
        showEditModal(role, index) {
            let obj = {
                id: role.id,
                name: role.name,
            };

            this.editData = obj;
            this.editModal = true;
            this.index = index;
        },
        async deleterole() {
          /*  if (!confirm("Are you sure you want to delete this role ?")) {
                return;
            }

             // role.isDeleting =true
            this.$set(role, "isDeleting", true);

            */
           this.isDeleting=true;

            const res = await this.callApi(
                "post",
                "app/delete_role",
                this.deleteItem
            );
            if (res.status === 200) {
                this.roles.splice(this.deletingIndex, 1);
                this.success("Tag has been deleted successfully");
            } else {
                this.swr();
            }

             this.isDeleting=false;
             this.showDeleteModal=false
        },
        showDeletingModal(role,i)
        {
            this.deleteItem=role;
            this.deletingIndex=i;
            this.showDeleteModal=true
        }
    },
    async created() {

       let res = await this.callApi("get", "/app/get_roles", {
            name: "testtag",
          });

        if (res.status == 200) {
            this.roles = res.data;
        } else {
            this.swr();
        }
    },
};
</script>
