import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { DEFAULT_LANGUAGE, FALLBACK_LANGUAGE } from '@/constants/trans'

Vue.use(VueI18n);

export const i18n = new VueI18n({
  locale: DEFAULT_LANGUAGE, // set locale
  fallbackLocale: FALLBACK_LANGUAGE,
  messages: { 
    en: { 
      //Global
      or: 'or',
      //Home
      appName: 'Squad Health Check',
      slogan: 'Increased awareness of where<br/>the squad is at, it’s state,<br/>challenges and opportunities.',
      helloMsg: 'Hello, nice to meet you!',
      squadMsg: 'Get moving with the Squad',
      enterCode: 'Enter code',
      create: 'Create',
      //Survey
      surveyView: 'Survey view',
      //Create
      createView: 'Create view',
      //Footer
      terms: 'By using this application, you agree to our<br /><strong>Terms of Service</strong> and <strong>Privacy Policy</strong>',
    }, 
    es: { 
      //Global
      or: 'o',
      //Home
      appName: 'Squad Health Check',
      slogan: 'Mayor conciencia de dónde está <br/> el escuadrón, su estado, <br/> desafíos y oportunidades.',
      helloMsg: 'Hola, encantad@ de conocerte!',
      squadMsg: 'Muévete con el Escuadrón',
      enterCode: 'Introduce el código',
      create: 'Crear',
      //Survey
      surveyView: 'Vista de encuesta',
      //Create
      createView: 'Vista de creación',
      //Footer
      terms: 'Al usar esta aplicación, acepta nuestros <br /> <strong> Términos de servicio </strong> y <strong> Política de privacidad </strong>',
    } 
  }// set locale messages
})