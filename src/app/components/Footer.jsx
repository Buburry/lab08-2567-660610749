import React from 'react'

export default function Footer(props) {
  return (
    <div className="mt-3">
    <p className="text-secondary text-center">
      copyright © 2023 {props.name} 12345678
    </p>
  </div>
  )
}
