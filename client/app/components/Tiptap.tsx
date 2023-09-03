'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Link from 'next/link'

const Tiptap = () => {
    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                heading: {
                    levels: [1, 2]
                }
            }),
        ],
        content: '<p>Please refer to the <a href="/tos">Terms of Service<a> before starting your post. We all thank you.</p>',
        autofocus: true,
        editable: true
    })

    return (
        <EditorContent editor={editor} />
    )
}

export default Tiptap;