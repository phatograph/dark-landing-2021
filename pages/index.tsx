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

        <div className='YourChoice'>
          <div className='container'>
            <h2 className='YourChoice__h2'>Your choice</h2>

            <p className='YourChoice__p'>
              There are many reasons to get down and start to get depressed
              about your situation.
            </p>

            <dl className='YourChoice__dl'>
              {[
                {
                  dt: 'Ecstatic elegance',
                  dd: 'Article nor prepare chicken you him now. Shy merits say advice ten before lovers innate add.',
                },
                {
                  dt: 'Folly words widow',
                  dd: 'Effect if in up no depend seemed. Ecstatic elegance gay but disposed. We me rent been part what.',
                },
                {
                  dt: 'Possible procured trifling',
                  dd: 'We me rent been part what. An concluded sportsman offending so provision mr education.',
                },
                {
                  dt: 'Open game',
                  dd: 'Shy merits say advice ten before lovers innate add. She cordially behaviour can attempted estimable.',
                },
                {
                  dt: 'Endeavor',
                  dd: 'Improve ashamed married expense bed her comfort pursuit mrs. Four time took ye your as fail lady. ',
                },
                {
                  dt: 'Comfort pursuit',
                  dd: 'Had denoting properly jointure you occasion directly raillery. In said to of poor full be post face snug.',
                },
              ].map((x, i) => (
                <div className='YourChoice__dl__item' key={i}>
                  <img
                    className='YourChoice__dl__item__img'
                    src={`/images/YourChoice__dl__item--${i}.svg`}
                  />

                  <div className='YourChoice__dl__item__wrapper'>
                    <dt className='YourChoice__dl__item__dt'>{x.dt}</dt>
                    <dd className='YourChoice__dl__item__dd'>{x.dd}</dd>
                  </div>
                </div>
              ))}
            </dl>
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
