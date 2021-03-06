import Vue from 'vue'
import Router from 'vue-router'

import Header from '../components/AppHeader'

import Index from '../pages/Index'

// 회원관리
import Register from '../pages/auth/Register'
import Login from '../pages/auth/Login'

// 게시글 관리
import PostDetail from '../pages/post/PostDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    router(Index, '/'), // 메인페이지

    // 회원관리
    router(Login, '/auth/login'), // 로그인 페이지
    router(Register, '/auth/register'), // 회원가입 페이지

    // 게시글 관리
    router(PostDetail, '/posts/:postId')
  ]
})

/** 간단한 라우터 생성을 위한 함수 */
function router (component, path) {
  const props = path.includes('/:') ? { default: true } : false

  return {
    path,
    name: component.name,
    components: {
      default: component,
      header: Header
    },
    props
  }
}
