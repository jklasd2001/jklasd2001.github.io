import { animated, useTrail } from '@react-spring/web'
import React, { Children, Fragment } from 'react'

const Trail = ({
  open,
  children,
  delay = 0,
  duration,
}: {
  open: boolean
  children: React.ReactNode
  delay?: number
  duration?: number
}) => {
  const items = Children.toArray(children)
  const trails = useTrail(items.length, {
    from: {
      opacity: 0,
      y: 20,
    },
    to: open
      ? {
          opacity: 1,
          y: 0,
        }
      : {
          opacity: 0,
          y: 20,
        },
    delay,
    config: {
      duration,
    },
  })

  return (
    <Fragment>
      {trails.map(({ ...style }, index) => {
        const item = items[index]

        if (React.isValidElement(item)) {
          const AnimatedComponent =
            animated[item.type as keyof typeof animated] || animated.div

          return (
            <AnimatedComponent
              key={index}
              style={style}
              {...(item.props as object)}
            />
          )
        }

        return item
      })}
    </Fragment>
  )
}

export default Trail
