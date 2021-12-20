<template>
    <div>
	<div class="content">
			<div class="container-fluid">
				<div class="row">
					<div class="col-12 col-md-12">
						<div class="_1adminOverveiw_card _box_shadow _border_radious _mar_b30 _1adminOverveiw_bg_one">
							<div class="_1adminOverveiw_card_left">
								<p class="_1adminOverveiw_card_left_num">{{user_name}}</p>

								<p class="_1adminOverveiw_card_left_title">Bienvenido al sistema para tiendas</p>
							</div>
							<div class="_1adminOverveiw_card_right">
								<Icon type="md-person" />
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            isLoggedIn: false,
            user_name:''
        }
    },
     created() {
       this.user_name=window.user.name;
    },
};
</script>

