import React from 'react'

import { Footer } from '../../../payload/payload-types'
import { fetchFooter, fetchGlobals } from '../../_api/fetchGlobals'
import FooterComponent from './FooterComponent'

export async function FooterSection() {
  let footer: Footer | null = null

  try {
    footer = await fetchFooter()
  } catch (error) {
    console.log(error)
  }

  return (
    <>
      <FooterComponent footer={footer} />
    </>
  )
}
