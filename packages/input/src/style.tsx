import { InputSize } from "./interface"

const chroma = require("chroma-js")
import { css, SerializedStyles } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { StateValue } from "./input"

export const inputFillStyle = css`
  background-color: ${globalColor(`--${illaPrefix}-gray-09`)};
  border-color: ${globalColor(`--${illaPrefix}-gray-09`)};
`
export const inputOutlineStyle = css`
  border-color: ${globalColor(`--${illaPrefix}-gray-08`)};
`
export const disableOutlineStyle = css`
  border-color: ${globalColor(`--${illaPrefix}-gray-08`)};
  color: ${globalColor(`--${illaPrefix}-gray-05`)};
`
export const disableFillStyle = css`
  border-color: ${globalColor(`--${illaPrefix}-gray-08`)};
  color: ${globalColor(`--${illaPrefix}-gray-05`)};
  background-color: ${globalColor(`--${illaPrefix}-gray-09`)};
`
export const hoverFillStyle = css`
  background-color: ${globalColor(`--${illaPrefix}-gray-08`)};
  border-color: ${globalColor(`--${illaPrefix}-gray-08`)};
`

export const errorFocusStyle = css`
  background-color: unset;
  border-color: ${globalColor(`--${illaPrefix}-red-03`)};
  box-shadow: 0 0 8px 0
    ${chroma(globalColor(`--${illaPrefix}-red-01`))
      .alpha(0.15)
      .hex()};
`
export const errorFillStyle = css`
  background-color: ${globalColor(`--${illaPrefix}-red-07`)};
  border-color: ${globalColor(`--${illaPrefix}-red-07`)};

  &:hover {
    background-color: ${globalColor(`--${illaPrefix}-red-06`)};
    border-color: ${globalColor(`--${illaPrefix}-red-06`)};
  }
`
export const errorOutlineStyle = css`
  background-color: unset;
  border-color: ${globalColor(`--${illaPrefix}-red-03`)};

  &:hover {
    border-color: ${globalColor(`--${illaPrefix}-red-02`)};
  }
`

export function applyVariantStyle(variant?: string) {
  let inputStyle: SerializedStyles
  switch (variant) {
    default:
    case "fill":
      inputStyle = css`
        background-color: ${globalColor(`--${illaPrefix}-gray-09`)};
        border-color: ${globalColor(`--${illaPrefix}-gray-09`)};
      `
      break
    case "outline":
      inputStyle = css`
        border-color: ${globalColor(`--${illaPrefix}-gray-08`)};
      `
      break
  }
  return inputStyle
}

export function applyContainerCss(variant: string) {
  return css`
    width: 280px;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 14px;
    line-height: 1.57;
    border-radius: 4px;
    vertical-align: middle;
    color: ${globalColor(`--${illaPrefix}-gray-02`)};
    ${applyVariantStyle(variant)}
  `
}

function applySizeStyle(size?: string) {
  let sizeCss: SerializedStyles
  switch (size) {
    default:
    case "large":
      sizeCss = css`
        height: 38px;
      `
      break
    case "medium":
      sizeCss = css`
        height: 30px;
      `
      break
    case "small":
      sizeCss = css`
        height: 22px;
        font-size: 12px;
      `
      break
  }
  return sizeCss
}

function applyStatus(stateValue: StateValue) {
  let mainStyle: SerializedStyles
  let disableStyle, hoverStyle, inputStyle, errorStyle: SerializedStyles

  switch (stateValue?.variant) {
    default:
    case "fill":
      disableStyle = disableFillStyle
      hoverStyle = hoverFillStyle
      inputStyle = inputFillStyle
      errorStyle = errorFillStyle
      break
    case "outline":
      disableStyle = disableOutlineStyle
      inputStyle = inputOutlineStyle
      errorStyle = errorOutlineStyle
      hoverStyle = css``
      break
  }

  if (stateValue?.disabled) {
    mainStyle = css`
      cursor: not-allowed;
      ${disableStyle}
    `
  } else if (stateValue?.focus) {
    const boxShadowColor = globalColor(
      `--${illaPrefix}-${stateValue.boarderColor}-01`,
    )
    mainStyle = css`
      border-color: ${globalColor(
        `--${illaPrefix}-${stateValue.boarderColor}-03`,
      )};
      box-shadow: 0 0 8px 0
        ${boxShadowColor ? chroma(boxShadowColor).alpha(0.15).hex() : ""};
      ${stateValue?.error ? errorFocusStyle : ""}
      background-color: white;
    `
  } else if (stateValue?.error) {
    mainStyle = css`
      ${errorStyle}
    `
  } else {
    mainStyle = css`
      &:hover {
        border-color: ${globalColor(
          `--${illaPrefix}-${stateValue.boarderColor}-06`,
        )};
        ${hoverStyle}
      }
    `
  }
  return css`
    ${inputStyle};
    ${mainStyle};
  `
}

export function applySizeCss(
  requirePadding?: boolean,
  size?: InputSize,
): SerializedStyles {
  let sizeCss: SerializedStyles
  let paddindCss: SerializedStyles | undefined
  if (requirePadding && size == "small") {
    paddindCss = css`
      padding: 0 12px;
    `
  } else if (requirePadding) {
    paddindCss = css`
      padding: 0 16px;
    `
  }
  switch (size) {
    default:
    case "large":
      sizeCss = css`
        height: 38px;
        ${paddindCss};
      `
      break
    case "medium":
      sizeCss = css`
        height: 30px;
        ${paddindCss};
      `
      break
    case "small":
      sizeCss = css`
        height: 22px;
        ${paddindCss};
      `
      break
  }
  return sizeCss
}

export function applyInputContainer(
  stateValue: StateValue,
  requirePadding?: boolean,
) {
  return css`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 14px;
    line-height: 1.57;
    color: ${globalColor(`--${illaPrefix}-gray-02`)};
    border: solid 1px ${globalColor(`--${illaPrefix}-gray-08`)};
    transition: all 200ms ease-in-out;
    ${applySizeCss(requirePadding, stateValue?.size)};
    ${applyStatus(stateValue)}
    &:first-of-type {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    &:last-of-type {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  `
}

export function applyInputStyle(textCenterHorizontal?: boolean | undefined) {
  let textAlignCss: SerializedStyles
  if (textCenterHorizontal) {
    textAlignCss = css`
      text-align: center;
    `
  } else {
    textAlignCss = css`
      text-align: start;
    `
  }
  return css`
    width: 100%;
    appearance: none;
    font-size: inherit;
    font-family: inherit;
    border-radius: 4px;
    line-height: 20px;
    color: ${globalColor(`--${illaPrefix}-gray-02`)};
    border: none;
    outline: unset;
    cursor: inherit;
    background-color: inherit;

    ${textAlignCss}
    &::placeholder {
      color: ${globalColor(`--${illaPrefix}-gray-04`)};
    }

    &:disabled {
      color: ${globalColor(`--${illaPrefix}-gray-05`)};

      &::placeholder {
        color: ${globalColor(`--${illaPrefix}-gray-05`)};
      }
    }
  `
}

function baseFixCls(stateValue: StateValue) {
  let sizeCss: SerializedStyles
  switch (stateValue?.size) {
    default:
      sizeCss = css`
        & > svg {
          font-size: 16px;
        }
      `
      break
    case "small":
      sizeCss = css``
      break
  }
  return css`
    display: flex;
    flex-direction: row;
    align-items: center;
    white-space: nowrap;
    vertical-align: middle;
    font-size: inherit;
    ${sizeCss}
  `
}

export function applyPrefixCls(stateValue: StateValue) {
  return css`
    ${baseFixCls(stateValue)}
    &:first-of-type {
      margin-right: 12px;
    }

    &:last-child {
      margin-left: 12px;
    }
  `
}

export function applySuffixCls(stateValue: StateValue) {
  return css`
    ${baseFixCls(stateValue)}
    margin-left: 12px;
  `
}

export function applyAddonCss(stateValue: StateValue) {
  let inputStyle: SerializedStyles
  switch (stateValue?.variant) {
    default:
    case "fill":
      inputStyle = css`
        background-color: ${globalColor(`--${illaPrefix}-gray-09`)};
        border-color: ${globalColor(`--${illaPrefix}-gray-08`)};
        border-top: 0;
        border-bottom: 0;

        &:first-of-type {
          border-left: 0;
        }

        &:last-of-type {
          border-right: 0;
        }
      `
      break
    case "outline":
      inputStyle = css`
        border-color: ${globalColor(`--${illaPrefix}-gray-08`)};

        &:first-of-type {
          border-right: 0;
        }

        &:last-of-type {
          border-left: 0;
        }
      `
      break
  }
  return css`
    ${baseFixCls(stateValue)}
    color: ${globalColor(`--${illaPrefix}-gray-02`)};
    border-color: ${globalColor(`--${illaPrefix}-gray-08`)};
    border-width: 1px;
    border-style: solid;
    padding: 0 16px;
    line-height: initial;

    &:first-of-type {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }

    &:last-of-type {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }

    ${inputStyle}
    ${applySizeStyle(stateValue?.size)}
  `
}

export const applyCountLimitStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: ${globalColor(`--${illaPrefix}-gray-05`)};
`

export function applyLengthErrorStyle(error?: boolean) {
  if (error) {
    return css`
      color: ${globalColor(`--${illaPrefix}-red-03`)};
    `
  }
  return css`
    color: ${globalColor(`--${illaPrefix}-gray-05`)};
  `
}

export const pointerStyle = css`
  cursor: pointer;
  color: ${globalColor(`--${illaPrefix}-gray-06`)};

  &:hover {
    color: ${globalColor(`--${illaPrefix}-gray-05`)};
  }
`
