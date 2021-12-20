<template>
    <div>
        <div class="content">
            <div class="container-fluid">
                <!--~~~~~~~ TABLE ONE ~~~~~~~~~-->
                <div
                    class="_1adminOverveiw_table_recent _box_shadow _border_radious _mar_b30 _p20"
                >
                    <p class="_title0">List stock products</p>

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
                                        Edit Stock
                                    </Button>
                                </td>
                            </tr>
                            <!-- ITEMS -->
                        </table>
                    </div>
                </div>

                <!-- start produc editing modal -->

                <Modal
                    v-model="editModal"
                    title="Edit Stock"
                    :mask-closable="false"
                    :closable="false"
                >
                    <div class="space">
                        <Input
                            v-model="editData.name"
                            placeholder="Edit produc name"
                            disabled
                        />
                    </div>
                    <div class="space">
                        <InputNumber
                            v-model="editData.stock"
                            placeholder="Edit product stock"
                            disabled
                        />
                    </div>
                    <div class="space">
                        <RadioGroup
                            v-model="EntranceType"
                            @on-change="LimpiarAmount"
                        >
                            <Radio label="In"></Radio>
                            <Radio label="Out"></Radio>
                        </RadioGroup>
                    </div>

                    <div class="space">
                        <InputNumber
                            v-model="amount"
                            @on-change="recalculateStock($event)"
                        />
                    </div>

                    <div slot="footer">
                        <Button type="default" @click="editModal = false"
                            >Close</Button
                        >
                        <Button
                            type="primary"
                            @click="editStock"
                            :disabled="isAdding"
                            :loading="isAdding"
                            >{{ isAdding ? "Editing.." : "Edit Stock" }}</Button
                        >
                    </div>
                </Modal>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            editModal: false,
            isAdding: false,
            products: [],
            editData: {},
            index: -1,
            deletingIndex: -1,
            amount: 0,
            EntranceType: "In",
            temp: 0,
            OriginalStock: 0,
        };
    },
    methods: {
        getUserId(user_id) {
            //

            var valObj = this.products.filter(function (elem) {
                if (elem.id == user_id) return elem.name;
            });

            if (valObj.length > 0) {
                return valObj[0].name;
            }
        },
        async editStock() {
            if (this.editData.name.trim() == "")
                return this.error("Product name is required");

            const res = await this.callApi(
                "post",
                "app/edit_product_stock",
                this.editData
            );


            if (res.status === 200) {
                this.products[this.index].name = this.editData.name;
                this.success("Product has beeen edited successfully");
                this.editProductStockItem(this.editData);
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
                stock: product.stock,
            };

            this.OriginalStock = product.stock;
            this.editData = obj;
            this.editModal = true;
            this.index = index;
            this.amount = 0;
        },
        recalculateStock(event) {
            let newStock = 0;

            if (event != null) {
                newStock = event;
            }

            if (this.EntranceType.trim() == "Out") {
                newStock = parseFloat(newStock) * -1;
            }

            if (parseFloat(this.OriginalStock) + parseFloat(newStock) < 0) {
                this.error("maximum stock to retire " + this.OriginalStock);
                this.editData.stock = this.OriginalStock;
                return;
            }

            this.editData.stock =
                parseFloat(this.OriginalStock) + parseFloat(newStock);
        },
        LimpiarAmount() {
            this.amount = 0;
            this.editData.stock = this.OriginalStock;
        },

        editProductStockItem(producItem) {
            //find the index of this id's object from local storage
            let objIndex = this.products.findIndex(
                (obj) => obj.id === producItem.id
            );

            this.products[objIndex].stock = producItem.stock;


            localStorage.setItem("products", JSON.stringify(this.products));
            this.products = JSON.parse(localStorage.getItem("products"));
        },
    },
    async created() {
        if (localStorage.getItem("products")) {
            try {
                this.products = JSON.parse(localStorage.getItem("products"));
            } catch (e) {
                localStorage.removeItem("products");
            }
        }
    },
};
</script>
