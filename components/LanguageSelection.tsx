import React from 'react'
import className from 'classnames'
import {NextPage} from 'next'
// import Link from 'next/link'
import {useRouter} from 'next/router'

const LanguageSelection: NextPage<{
  data?: any
}> = () => {
  const router = useRouter()

  return (
    <div className='LanguageSelection'>
      <div className='LanguageSelection__item'>
        <a
          className={className('LanguageSelection__a', {
            'LanguageSelection__a--active': router.locale == 'ja',
          })}
          onClick={() => {
            router.push(router.pathname, router.pathname, {
              locale: 'ja',
            })
          }}
        >
          JP
        </a>
      </div>

      <div className='LanguageSelection__item'>
        <a
          className={className('LanguageSelection__a', {
            'LanguageSelection__a--active': router.locale == 'en',
          })}
          onClick={() => {
            router.push(router.pathname, router.pathname, {
              locale: 'en',
            })
          }}
        >
          EN
        </a>
      </div>
    </div>
  )
}

export default LanguageSelection
