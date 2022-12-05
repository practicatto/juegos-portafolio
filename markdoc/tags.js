import { Callout } from '@/components/Callout'
import Image from 'next/image'
import { QuickLink, QuickLinks } from '@/components/QuickLinks'
import { Audio } from '@/components/Audio'
import { Accordion } from '@/components/Accordion'

const tags = {
  callout: {
    attributes: {
      title: { type: String },
      type: {
        type: String,
        default: 'note',
        matches: ['note', 'warning'],
        errorLevel: 'critical',
      },
    },
    render: Callout,
  },
  figure: {
    selfClosing: true,
    attributes: {
      src: { type: String },
      alt: { type: String },
      caption: { type: String },
    },
    render: ({ src, alt = '', caption }) => (
      <figure>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} />
        <figcaption>{caption}</figcaption>
      </figure>
    ),
  },
  iframe: {
    selfClosing: true,
    attributes: {
      src: { type: String },
      frameborder: { type: String },
      width: { type: String },
      height: { type: String },
    },
    render: ({ src, frameborder, width, height }) => (
      <iframe
        src={src}
        frameborder={frameborder}
        width={width}
        height={height}
      ></iframe>
    ),
  },
  image: {
    selfClosing: true,
    attributes: {
      src: { type: String },
      alt: { type: String },
      width: { type: String },
      height: { type: String },
    },
    render: ({ src, alt = '', width, height }) => (
      <Image src={src} alt={alt} width={width} height={height} />
    ),
  },
  audio: {
    selfClosing: true,
    attributes: {
      src: { type: String },
      type: { type: String },
      render: ({ src, type }) => (
        <audio controls>
          <source src={src} type={type} />
        </audio>
      ),
    },
  },
  'accordion-docs': {
    selfClosing: true,
    render: Accordion,
    attributes: {
      title: { type: String },
      paragraph: { type: String },
    },
  },

  'audio-docs': {
    selfClosing: true,
    render: Audio,
    attributes: {
      title: { type: String },
    },
  },
  'quick-links': {
    render: QuickLinks,
  },
  'quick-link': {
    selfClosing: true,
    render: QuickLink,
    attributes: {
      title: { type: String },
      description: { type: String },
      icon: { type: String },
      href: { type: String },
    },
  },
}

export default tags
