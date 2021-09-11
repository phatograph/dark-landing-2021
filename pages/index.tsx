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
    <React.Fragment>
      <div className='Layout'>
        <div className='Nav'>
          <div className='container'>
            <a className='Nav__a' />

            <div className='Nav__links'>
              {[
                {
                  label: 'About',
                },
                {
                  label: 'Gallery',
                },
                {
                  label: 'Pricing',
                },
                {
                  label: 'FAQ',
                },
                {
                  label: 'Benefits',
                },
              ].map((x, i) => (
                <a className='Nav__links__a' key={i}>
                  {x.label}
                </a>
              ))}
            </div>

            <div className='Nav__right'>
              <a className='Button Button--orange-border'>SIgn In</a>

              <a className='Button Button--shadow'>Sign Up</a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
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
