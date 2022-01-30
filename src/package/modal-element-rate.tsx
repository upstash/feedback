import styles from './styles.module.css'
import React from 'react'
import cx from 'classnames'

export default function FeedbackModalElementRate({
  children,
  selected,
  onChange = () => {},
  value,
}: {
  children: React.ReactElement
  selected: string
  onChange: any
  value: string
}) {
  const isSelected = selected === value

  return (
    <label
      className={cx(styles.rateLabel, isSelected && styles.rateLabelSelected)}
    >
      <input
        className={styles.rateInput}
        type="radio"
        name="rate"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {children}
    </label>
  )
}
