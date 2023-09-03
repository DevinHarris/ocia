'use client'

import { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import './editor.css'

export default function Editor() {
    const [value, setValue] = useState("Please refer to the <a href=\"/tos\">Terms and Services</a> before starting your post. We all thank you.");

    return <ReactQuill theme='snow' value={value} onChange={setValue} />
}