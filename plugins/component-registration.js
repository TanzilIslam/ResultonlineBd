import Vue from 'vue'

import NavBar from '~/components/user/NavBar'
import Carousel from '~/components/user/Carousel'
import Breadcrumb from '~/components/user/Breadcrumb'
import SideBar from '~/components/user/SideBar'
import HomeCard from '~/components/user/HomeCard'
import LatestCard from '~/components/user/LatestCard'
import VclHomeCard from '~/components/user/vue-content-loading-cards/VclHomeCard'
import VclChannelCommonCard from '~/components/user/vue-content-loading-cards/VclChannelCommonCard'
import ChannelCommonCard from '~/components/user/ChannelCommonCard'

Vue.component('NavBar', NavBar)
Vue.component('Carousel', Carousel)
Vue.component('Breadcrumb', Breadcrumb)
Vue.component('SideBar', SideBar)
Vue.component('HomeCard', HomeCard)
Vue.component('LatestCard', LatestCard)
Vue.component('VclHomeCard', VclHomeCard)
Vue.component('VclChannelCommonCard', VclChannelCommonCard)
Vue.component('ChannelCommonCard', ChannelCommonCard)

