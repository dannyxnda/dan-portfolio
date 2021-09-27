import { SitemapStream, streamToPromise } from 'sitemap'
import { Readable } from 'stream'

type Req = { headers: { host: any } }
type Res = {
  writeHead: (status: number, config: { 'Content-Type': string }) => void
  end: (xmlString: string) => void
}

const genSitemap = async (req: Req, res: Res) => {
  // An array with your links
  const links = [{ url: '/', changefreq: 'daily', priority: 0.3 }]

  // Create a stream to write to
  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` })

  res.writeHead(200, {
    'Content-Type': 'application/xml',
  })

  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream)
  ).then((data) => data.toString())

  res.end(xmlString)
}

export default genSitemap
