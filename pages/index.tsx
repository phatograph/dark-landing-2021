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

        <div className='Increase'>
          <div className='container'>
            <div className='Increase__wrapper'>
              <h2 className='Increase__h2'>
                Increase your business <span>traffic</span>
              </h2>

              <p className='Increase__p'>
                We are committed to processing the information in order to
                contact you and talk about your project.
              </p>

              <div className='Increase__buttons'>
                <a className='Button Button--shadow Button--long'>Learn More</a>
              </div>
            </div>
          </div>
        </div>

        <div className='SimpleWays'>
          <div className='container'>
            <h2 className='SimpleWays__h2'>
              3 Simple Ways To <span>Save</span> A Bunch <br />
              Of <span>Money</span> When Buying A New Computer
            </h2>

            <p className='SimpleWays__p'>
              Fully customizable and neatly organized components <br />
              will help you work faster without limiting creative freedom.
            </p>

            <dl className='SimpleWays__dl'>
              {[
                {
                  dt: '100+',
                  dd: '5 Reasons To Purchase Desktop Computers',
                },
                {
                  dt: '43,000+',
                  dd: '3 Simple Ways To Save A Bunch Of Money When Buying A New Computer',
                },
                {
                  dt: '30+',
                  dd: 'A Discount Toner Cartridge Is Better Than Ever And You Will Save 50 Or More',
                },
              ].map((x, i) => (
                <div className='SimpleWays__dl__item' key={i}>
                  <dt className='SimpleWays__dl__item__dt'>{x.dt}</dt>
                  <dd className='SimpleWays__dl__item__dd'>{x.dd}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className='NextProject'>
          <div className='container'>
            <h2 className='NextProject__h2'>
              Create your <span>next project</span> <br />
              with startup framework
            </h2>

            <div className='NextProject__buttons'>
              <a className='Button Button--shadow'>Get Started</a>
            </div>
          </div>
        </div>

        <div className='Invest'>
          <div className='container'>
            <div className='Invest__wrapper'>
              <h2 className='Invest__h2'>
                Invest property for better <span>business</span>
              </h2>

              <p className='Invest__p'>
                We are committed to processing the information in order to
                contact you and talk about your project. We are committed to
                processing the information.
              </p>

              <div className='Invest__buttons'>
                <a className='Button Button--shadow Button--long'>Learn More</a>
              </div>
            </div>
          </div>
        </div>

        <div className='HelpFinding'>
          <div className='container'>
            <div className='HelpFinding__wrapper'>
              <h2 className='HelpFinding__h2'>
                Help Finding Information Online
              </h2>

              <p className='HelpFinding__p'>
                Fully customizable and neatly organized components will help you
                work faster without limiting creative freedom.
              </p>

              <dl className='HelpFinding__dl'>
                {[
                  {
                    dt: 'Feature One',
                    dd: 'Fully customizable and neatly organized components will help you work faster ',
                  },
                  {
                    dt: 'Feature Two',
                    dd: 'Unguarded and ardent. Deck in the. Rests in pleasure.',
                  },
                ].map((x, i) => (
                  <div className='HelpFinding__dl__item' key={i}>
                    <img
                      className='HelpFinding__dl__item__img'
                      src={`/images/HelpFinding__dl__item__img--${i}.svg`}
                    />

                    <dt className='HelpFinding__dl__item__dt'>{x.dt}</dt>
                    <dd className='HelpFinding__dl__item__dd'>{x.dd}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        <div className='ManyReasons'>
          <div className='container'>
            <div className='ManyReasons__wrapper'>
              <h2 className='ManyReasons__h2'>
                There are many reasons to get down
              </h2>

              <p className='ManyReasons__p'>
                There are many reasons to get down and start to get <br />
                depressed about your situation.
              </p>

              <form className='ManyReasons__form'>
                <input
                  type='text'
                  className='ManyReasons__form__input'
                  placeholder='Your Email'
                />

                <button className='ManyReasons__form__button'>Send</button>
              </form>

              <small className='ManyReasons__small'>
                No spam. Only releases, updates and discounts
              </small>
            </div>
          </div>
        </div>

        <footer className='Footer'>
          <div className='container'>
            <div className='Footer__top'>
              <p className='Footer__top__p'>ARShakir</p>

              <div className='Footer__top__socials'>
                {[
                  {
                    k: 'google',
                  },
                  {
                    k: 'tw',
                  },
                  {
                    k: 'fb',
                  },
                ].map((_, i) => (
                  <a className='Footer__top__socials__a' key={i}>
                    <img
                      className='Footer__top__socials__a__img'
                      src={`/images/Footer__top__socials__a__img--${i}.svg`}
                    />
                  </a>
                ))}
              </div>
            </div>

            <div className='Footer__middle'>
              {[
                {
                  label: 'First',
                },
                {
                  label: 'Second',
                },
                {
                  label: 'Third',
                },
                {
                  label: 'Fourth',
                },
              ].map((x, i) => (
                <div className='Footer__middle__item' key={i}>
                  <h3 className='Footer__middle__item__h3'>{x.label}</h3>

                  <div className='Footer__middle__item__sub'>
                    {[
                      {
                        label: 'First',
                      },
                      {
                        label: 'Second',
                      },
                      {
                        label: 'Third',
                      },
                      {
                        label: 'Fourth',
                      },
                    ].map((y, j) => (
                      <a key={j} className='Footer__middle__item__sub__a'>
                        {y.label} page
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className='Footer__bottom'>
              <p className='Footer__bottom__p'>&copy; Copyrights 2021</p>

              <a className='Footer__bottom__a'>Privacy policy</a>

              <p className='Footer__bottom__a'>Terms of service</p>
            </div>
          </div>
        </footer>
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
