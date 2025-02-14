/** @jsxImportSource @emotion/react */
import * as React from "react"
import { forwardRef } from "react"
import { ParagraphProps } from "./interface"
import { Base } from "./base"
import { applyParagraphContainer, applyTextContainer } from "./paragraph-style"
import mergedToString from "./measure-element"
import { Tooltip } from "@illa-design/tooltip"
import { css } from "@storybook/theming"

export const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  (props, ref) => {
    // get props
    const {
      colorScheme = "blackAlpha",
      ellipsis,
      bold,
      disabled,
      mark,
      underline,
      deleted,
      code,
      copyable,
      fontSize = "14px",
      indent,
      ...otherProps
    } = props

    const showTooltip =
      !disabled &&
      (ellipsis == true || (typeof ellipsis == "object" && ellipsis.tooltip))

    const finalCss = css`
      ${applyParagraphContainer(indent ?? false)};
      ${applyTextContainer(fontSize)};
    `

    const p = (
      <div css={finalCss} ref={ref} {...otherProps}>
        <Base
          colorScheme={colorScheme}
          ellipsis={ellipsis}
          bold={bold}
          disabled={disabled}
          mark={mark}
          underline={underline}
          deleted={deleted}
          code={code}
          copyable={copyable}
        >
          {props.children}
        </Base>
      </div>
    )

    if (showTooltip) {
      return (
        <Tooltip
          content={mergedToString(React.Children.toArray(props.children))}
        >
          {p}
        </Tooltip>
      )
    } else {
      return p
    }
  },
)

Paragraph.displayName = "Paragraph"
