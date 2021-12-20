<template>
    <div>
        <div class="content">
            <div class="container-fluid">
                <!--~~~~~~~ TABLE ONE ~~~~~~~~~-->
                <div
                    class="_1adminOverveiw_table_recent _box_shadow _border_radious _mar_b30 _p20"
                >
                    <p class="_title0">
                        Products
                        <Button @click="addModal = true">
                            <Icon type="md-add" />Add Product</Button
                        >
                    </p>

                    <div class="_overflow _table_div">
                        <table class="_table">
                            <!-- TABLE TITLE -->
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Stock</th>
                                <th>User_id</th>
                                <th>Create at</th>
                                <th>Action</th>
                            </tr>
                            <!-- TABLE TITLE -->

                            <!-- ITEMS -->
                            <tr
                                v-for="(product, i) in products"
                                :key="i"
                                v-if="products.length"
                            >
                                <td>{{ product.id }}</td>
                                <td class="_table_name">
                                    {{ product.name }}
                                </td>
                                <td class="_table_stock">
                                    {{ product.stock }}
                                </td>
                                <td>{{ product.user.name }}</td>
                                <td>{{ product.created_at }}</td>
                                <td>
                                    <Button
                                        type="info"
                                        size="small"
                                        @click="showEditModal(product, i)"
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        type="error"
                                        size="small"
                                        @click="showDeletingModal(product, i)"
                                        :loading="product.isDeleting"
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
                    title="Add Producto"
                    :mask-closable="false"
                    :closable="false"
                >
                    <Input v-model="data.name" placeholder="Add produc name" />

                    <div slot="footer">
                        <Button type="default" @click="addModal = false"
                            >Close</Button
                        >
                        <Button
                            type="primary"
                            @click="addProduct"
                            :disabled="isAdding"
                            :loading="isAdding"
                            >{{ isAdding ? "Adding.." : "Add Product" }}</Button
                        >
                    </div>
                </Modal>

                <!-- end product adding modal -->

                <!-- start produc editing modal -->

                <Modal
                    v-model="editModal"
                    title="Edit Product"
                    :mask-closable="false"
                    :closable="false"
                >
                    <Input
                        v-model="editData.name"
                        placeholder="Edit produc name"
                    />

                    <div slot="footer">
                        <Button type="default" @click="editModal = false"
                            >Close</Button
                        >
                        <Button
                            type="primary"
                            @click="editProduct"
                            :disabled="isAdding"
                            :loading="isAdding"
                            >{{
                                isAdding ? "Editing.." : "Edit Product"
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
                        <p>Are you sure you want to delete product?</p>
                    </div>
                    <div slot="footer">
                        <Button
                            type="error"
                            size="large"
                            long
                            :loading="isDeleting"
                            :disabled="isDeleting"
                            @click="deleteProduct"
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
            products: [],
            users: [],
            editData: {
                name: "",
            },
            index: -1,
            showDeleteModal: false,
            isDeleting: false,
            deleteItem: {},
            deletingIndex: -1,
        };
    },
    methods: {

         async getUsers() {
            let res = await this.callApi("get", "/app/get_users");

            if (res.status == 200) {
                this.users = res.data;
            } else {
                this.swr();
            }
        },
        getUserId(user_id) {
            var valObj = this.users.filter(function (elem) {
                if (elem.id == user_id) {
                    return elem.name;
                }
            });

            if (valObj.length > 0) {
                return valObj[0].name;
            }
        },
        async addProduct() {
            if (this.data.name.trim() == "")
                return this.error("product name is required");

            const res = await this.callApi(
                "post",
                "app/create_product",
                this.data
            );

            res.data.user = {
                id: res.data.user_id,
                name: this.getUserId(res.data.user_id),
            };

            if (res.status === 201) {
                this.products.unshift(res.data); //añade los elementos pasados al inicio del array
                this.success("Product has beeen added successfully");
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
        async editProduct() {
            if (this.editData.name.trim() == "")
                return this.error("Product name is required");

    console.log(this.editData);

            const res = await this.callApi(
                "post",
                "app/edit_product",
                this.editData
            );

            if (res.status === 200) {
                this.products[this.index].name = this.editData.name;
                this.success("Product has beeen edited successfully");
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
        showEditModal(product, index) {
            let obj = {
                id: product.id,
                name: product.name,
            };

            this.editData = obj;
            this.editModal = true;
            this.index = index;
        },
        async deleteProduct() {
            /*  if (!confirm("Are you sure you want to delete this product ?")) {
                return;
            }

             // product.isDeleting =true
            this.$set(product, "isDeleting", true);

            */
            this.isDeleting = true;

            const res = await this.callApi(
                "post",
                "app/delete_product",
                this.deleteItem
            );
            if (res.status === 200) {
                this.products.splice(this.deletingIndex, 1);
                this.success("Tag has been deleted successfully");
            } else {
                this.swr();
            }

            this.isDeleting = false;
            this.showDeleteModal = false;
        },
        showDeletingModal(product, i) {
            this.deleteItem = product;
            this.deletingIndex = i;
            this.showDeleteModal = true;
        },
    },
    async created() {
        let res = await this.callApi("get", "/app/get_products");

        this.getUsers();

        localStorage.removeItem("products");

        if (res.status == 200) {
            this.products = res.data;
            localStorage.setItem("products", JSON.stringify(this.products));
        } else {
            this.swr();
        }
    },
};
</script>
