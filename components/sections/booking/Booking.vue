<template>
  <div class="mb-16 flex flex-col md:flex-row px-4 pb-4">
    <div
      class="max-w-screen-xl mt-12 lg:mb-16 px-8 grid gap-10 xl:gap-12 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-white text-black rounded-lg shadow-lg"
    >
      <div class="flex flex-col justify-between">
        <div>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            {{
              messageSent ? 'Message Sent, \nThank you!' : 'Contact the Owners'
            }}
          </h2>
          <div class="text-gray-700 mt-8">
            Hate forms? Try <a href="#" class="underline">email</a>
          </div>
        </div>
        <div class="mt-8 text-center">
          <BookingSvg />
        </div>
      </div>
      <div class="form__field-group">
        <div>
          <span class="uppercase text-sm text-gray-600 font-bold"
            >Full Name</span
          >
          <input
            v-model="formData.name"
            class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder=""
          />
        </div>
        <div class="mt-8">
          <span class="uppercase text-sm text-gray-600 font-bold">Email</span>
          <input
            v-model="formData.email"
            class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
          />
        </div>
        <div class="mt-8">
          <span class="uppercase text-sm text-gray-600 font-bold">Message</span>
          <textarea
            v-model="formData.message"
            class="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>
        <div class="mt-8">
          <Button
            class="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-white hover:bg-red-500 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
            @click="sendForm"
            text="Send Message"
          >
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs, { init } from 'emailjs-com'
import BookingSvg from '@/components/icons/BookingSvg.vue'
import Button from '@/components/buttons/Button.vue'
export default {
  components: {
    BookingSvg,
    Button,
  },
  data() {
    return {
      messageSent: false,
      formData: {
        name: '',
        email: '',
        message: '',
      },
    }
  },
  methods: {
    sendForm() {
      init('user_1zmjJujyWGdukFUZ9Mrfn')
      emailjs.send('service_u6s87ud', 'template_uviispy', this.formData).then(
        (res) => {
          console.log('Success', res.status, res.text)
          this.resetForm()
          this.messageSent = !this.messageSent
          location.href = '#booking'
        },
        (err) => {
          console.log('Failed...', err)
        }
      )
    },
    resetForm() {
      this.formData.name = ''
      this.formData.email = ''
      this.formData.message = ''
    },
  },
}
</script>

<style scoped>
.form__field-group {
  font-family: 'Montserrat', sans-serif;
}
</style>
