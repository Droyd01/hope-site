export const siteMeta = {
  title: 'Hope Study',
  description: 'A University-supported study listening to parents of young children with cerebral palsy in Conductive Education.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  organizationLdJson: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Hope Study',
    'url': process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  }
}