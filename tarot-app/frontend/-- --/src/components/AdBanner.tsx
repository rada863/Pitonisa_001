import { useEffect } from 'react'

export default function AdBanner() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
    script.async = true
    document.body.appendChild(script)

    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (e) {
      console.error('AdSense error:', e)
    }
  }, [])

  return (
    <ins className="adsbygoogle block w-full my-4"
      data-ad-client="ca-pub-XXXXXXXXXXXXXXX"
      data-ad-slot="YYYYYYYYYY"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins>
  )
}