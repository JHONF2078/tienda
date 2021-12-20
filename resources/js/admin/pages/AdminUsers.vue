<template>
    <div>
        <div class="content">
            <div class="container-fluid">
                <!--~~~~~~~ TABLE ONE ~~~~~~~~~-->
                <div
                    class="_1adminOverveiw_table_recent _box_shadow _border_radious _mar_b30 _p20"
                >
                    <p class="_title0">
                        users
                        <Button @click="showAddModal()">
                            <Icon type="md-add" />Add Admin</Button
                        >
                    </p>

                    <div class="_overflow _table_div">
                        <table class="_table">
                            <!-- TABLE TITLE -->
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Create at</th>
                                <th>Action</th>
                            </tr>
                            <!-- TABLE TITLE -->

                            <!-- ITEMS -->
                            <tr
                                v-for="(user, i) in users"
                                :key="i"
                                v-if="users.length"
                            >
                                <td>{{ user.id }}</td>
                                <td class="_table_name">
                                    {{ user.name }}
                                </td>
                                <td class="_table_email">
                                    {{ user.email }}
                                </td>
                                <td>{{ user.role.name }}</td>
                                <td>{{ user.created_at }}</td>
                                <td>
                                    <Button
                                        type="info"
                                        size="small"
                                        @click="showEditModal(user, i)"
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        type="error"
                                        size="small"
                                        @click="showDeletingModal(user, i)"
                                        :loading="user.isDeleting"
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
                    title="Add Admin"
                    :mask-closable="false"
                    :closable="false"
                >
                    <div class="space">
                        <Input
                            type="text"
                            v-model="data.name"
                            placeholder="name"
                        />
                    </div>
                    <div class="space">
                        <Input
                            type="email"
                            v-model="data.email"
                            placeholder="email"
                        />
                    </div>
                    <div class="space">
                        <Input
                            type="password"
                            v-model="data.password"
                            placeholder="password"
                        />
                    </div>
                    <div class="space">
                        <div class="_input_field">
                            <Select
                                v-model="data.role_id"
                                placeholder="Select role"
                            >
                                <Option
                                    v-for="(r, i) in roles"
                                    :value="r.id"
                                    :key="i"
                                    >{{ r.name }}</Option
                                >
                            </Select>
                        </div>
                    </div>

                    <div slot="footer">
                        <Button type="default" @click="addModal = false"
                            >Close</Button
                        >
                        <Button
                            type="primary"
                            @click="adduser"
                            :disabled="isAdding"
                            :loading="isAdding"
                            >{{ isAdding ? "Adding.." : "Add user" }}</Button
                        >
                    </div>
                </Modal>

                <!-- end user adding modal -->

                <!-- start produc editing modal -->

                <Modal
                    v-model="editModal"
                    title="Edit User"
                    :mask-closable="false"
                    :closable="false"
                >
                    <div class="space">
                        <Input
                            type="text"
                            v-model="editData.name"
                            placeholder="name"
                        />
                    </div>
                    <div class="space">
                        <Input
                            type="email"
                            v-model="editData.email"
                            placeholder="email"
                        />
                    </div>
                    <div class="space">
                        <Input
                            type="password"
                            v-model="editData.password"
                            placeholder="password"
                        />
                    </div>
                    <div class="space">
                        <div class="_input_field">
                            <Select
                                v-model="editData.role_id"
                                placeholder="Select role"
                            >
                                <Option
                                    v-for="(r, i) in roles"
                                    :value="r.id"
                                    :key="i"
                                    >{{ r.name }}</Option
                                >
                            </Select>
                        </div>
                    </div>

                    <div slot="footer">
                        <Button type="default" @click="editModal = false"
                            >Close</Button
                        >
                        <Button
                            type="primary"
                            @click="edituser"
                            :disabled="isAdding"
                            :loading="isAdding"
                            >{{ isAdding ? "Editing.." : "Edit user" }}</Button
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
                        <p>Are you sure you want to delete tag?</p>
                    </div>
                    <div slot="footer">
                        <Button
                            type="error"
                            size="large"
                            long
                            :loading="isDeleting"
                            :disabled="isDeleting"
                            @click="deleteuser"
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
                email: "",
                password: "",
                role_id: -1,
            },
            addModal: false,
            editModal: false,
            isAdding: false,
            users: [],
            editData: {
                name: "",
            },
            index: -1,
            showDeleteModal: false,
            isDeleting: false,
            deleteItem: {},
            deletingIndex: -1,
            roles: [],
        };
    },
    methods: {
        async getRoles() {
            let res = await this.callApi("get", "/app/get_roles");

            if (res.status == 200) {
                this.roles = res.data;
            } else {
                this.swr();
            }
        },
        getRoleId(role_id) {
            //

            var valObj = this.roles.filter(function (elem) {
                if (elem.id == role_id) return elem.name;
            });

            if (valObj.length > 0) {
                return valObj[0].name;
            }
        },
        async adduser() {
            if (this.data.name.trim() == "") {
                return this.error("user name is required");
            }
            if (this.data.email.trim() == "") {
                return this.error("email name is required");
            }
            if (this.data.password.trim() == "") {
                return this.error("password name is required");
            }
            if (this.data.role_id < 0) {
                return this.error("role name is required");
            }

            const res = await this.callApi(
                "post",
                "app/create_user",
                this.data
            );

            res.data.role = {
                id: res.data.role_id,
                name: this.getRoleId(res.data.role_id),
            };

            if (res.status === 201) {
                this.users.unshift(res.data); //añade los elementos pasados al inicio del array
                this.success("user has beeen added successfully");
                this.addModal = false;
                this.data.name = "";
                this.data.email = "";
                this.data.password = "";
                this.data.role_id = "";
            } else {
                if (res.status == 422) {
                    for (let i in res.data.errors) {
                        this.error(res.data.errors[i][0]);
                    }
                } else {
                    this.swr();
                }
            }
        },
        async edituser() {
            if (this.editData.name.trim() == "") {
                return this.error("user name is required");
            }
            if (this.editData.email.trim() == "") {
                return this.error("email name is required");
            }
            if (
                this.editData.password == undefined ||
                this.editData.password == ""
            ) {
                return this.error("password name is required");
            }
            if (this.editData.role_id < 0) {
                return this.error("role name is required");
            }



            const res = await this.callApi(
                "post",
                "app/edit_user",
                this.editData
            );


            this.editData.role = {
                id: this.editData.role_id,
                name: this.getRoleId(this.editData.role_id),
            };

            if (res.status === 200) {
                this.users[this.index] = this.editData;
                this.success("user has beeen edited successfully");
                this.editModal = false;
            } else {
                if (res.status == 422) {
                    for (let i in res.data.errors) {
                        this.error(res.data.errors[i][0]);
                    }
                } else {
                    this.swr();
                }
            }
        },
        showEditModal(user, index) {
            let obj = {
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password,
                role_id: user.role_id,
                created_at:user.created_at
            };

            this.editData = obj;
            this.editModal = true;
            this.index = index;
        },
        showAddModal() {
            this.addModal = true;
        },
        async deleteuser() {
            /*  if (!confirm("Are you sure you want to delete this user ?")) {
                return;
            }

             // user.isDeleting =true
            this.$set(user, "isDeleting", true);

            */
            this.isDeleting = true;

            const res = await this.callApi(
                "post",
                "app/delete_user",
                this.deleteItem
            );
            if (res.status === 200) {
                this.users.splice(this.deletingIndex, 1);
                this.success("Tag has been deleted successfully");
            } else {
                this.swr();
            }

            this.isDeleting = false;
            this.showDeleteModal = false;
        },
        showDeletingModal(user, i) {
            this.deleteItem = user;
            this.deletingIndex = i;
            this.showDeleteModal = true;
        },
    },
    async created() {
        let res = await this.callApi("get", "/app/get_users");
        this.getRoles();

        if (res.status == 200) {
            this.users = res.data;
        } else {
            this.swr();
        }
    },
};
</script>
