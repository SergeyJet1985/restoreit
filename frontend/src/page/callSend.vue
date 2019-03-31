<template>
  <div class="form-callback">
    <div v-if="send">
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          v-model="name"
          :counter="10"
          :rules="nameRules"
          label="Имя"
          required
        ></v-text-field>
        <v-text-field
          v-model="call"
          :counter="12"
          :rules="callRules"
          label="Номер телефона"
          required
        ></v-text-field>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>


        <v-checkbox
          v-model="checkbox"
          :rules="[v => !!v || 'Подтвердите для продолжения']"
          label="Подтверждения операции"
          required
        ></v-checkbox>

        <v-btn
          :disabled="!valid"
          color="black"
          outline
          @click="validate"
        >
          Заказать
        </v-btn>

        <v-btn
          color="red darken-1"
          @click="reset"
        >
          Сброс
        </v-btn>
      </v-form>
    </div>
    <div v-else>
      <h2>Ваш заказ принят в обработку, ожидайте звонка специалиста</h2>
    </div>
  </div>
</template>

<script>
  export default {
    name:'callSend',
    data: () => ({
      send:true,
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Имя не верно',
        v => (v && v.length <= 20) || 'Введите имя'
      ],
      callRules: [
        v => !!v || 'Номер телефона не верный',
        v => (v && v.length <= 13) || '+7(***)***-**-**'
      ],
      call: '',
      email: '',
      emailRules: [
        v => !!v || 'Адрес электронной почты не верный',
        v => /.+@.+/.test(v) || 'Введите адрес почты'
      ],
      checkbox: false,
    }),

    methods: {
      validate () {
        if (this.$refs.form.validate()) {
         // this.$refs.form.reset()
         // this.send = false;
          const message ={
            name:this.name,
            mail:this.email,
            call:this.call,
          }
          console.log(message);
          this.$store.dispatch('send',message)
        }
      },
      reset () {
        this.$refs.form.reset()
      },
    }
    
  }
</script>

<style lang="scss">
.form-callback{
  padding: 70px;
}

@media only screen and (max-width: 640px) {
  .form-callback{
    padding: 20px;
  }
}


</style>