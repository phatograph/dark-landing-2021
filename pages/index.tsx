import React from 'react'
import {NextPage} from 'next'
// import className from 'classnames'
// import Link from 'next/link'
// import {useRouter} from 'next/router'
// import axios, {AxiosResponse} from 'axios'
// import Cookies from 'js-cookie'

// import {_t, COOKIE_SESSION_CLIENT} from '@lib/helpers'
// import {withSession} from '@lib/session'

const Index: NextPage<{}> = () => {
  // const router = useRouter()
  // const t = _t(router.locale)

  return (
    <div
      className='Index'
    >
      Index
    </div>
  )
}

// export const getServerSideProps = withSession(async ({req}) => {
//   const agencyToken = req.session.get('agencyToken')
//
//   if (agencyToken) {
//     return {
//       redirect: {
//         destination: '/admin',
//         permanent: false,
//       },
//     }
//   }
//
//   return {
//     props: {},
//   }
// })

export default Index
