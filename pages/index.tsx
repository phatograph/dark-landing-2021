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

        <div className='Hero'>
          <div className='container'>
            <div className='Hero__wrapper'>
              <h1 className='Hero__h1'>
                Many reasons to get up and start to get back in the business
              </h1>

              <p className='Hero__p'>
                The harder you work for something, the greater you’ll feel when
                you achieve it.
              </p>

              <div className='Hero__buttons'>
                <a className='Button Button--shadow'>Learn More</a>
                <a className='Button Button--orange-border'>Demo</a>
              </div>

              <div className='Hero__video'>
                <a className='Hero__video__a' />

                <div className='Hero__video__right'>
                  <p className='Hero__video__right__p'>
                    The harder you work for something, the greater you’ll feel
                    when you achieve it.
                  </p>

                  <a className='Hero__video__right__a'>Watch preview</a>
                </div>
              </div>
            </div>

            <img className='Hero__img' src='/images/Hero__img.svg' />
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
