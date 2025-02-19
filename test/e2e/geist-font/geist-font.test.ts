import { nextTestSetup } from 'e2e-utils'
import { assertNoRedbox } from 'next-test-utils'

describe('geist-font', () => {
  const { next } = nextTestSetup({
    files: __dirname,
    dependencies: {
      geist: 'latest',
    },
  })

  it('should work with geist font in pages router', async () => {
    const browser = await next.browser('/foo')

    await assertNoRedbox(browser)
    const text = await browser.elementByCss('p').text()
    expect(text).toBe('Foo page')
  })
})
