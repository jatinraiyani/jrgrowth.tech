'use client';

import React, { useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';

interface BlogEditorProps {
  content: any;
  onChange: (content: any) => void;
}

export default function BlogEditor({ content, onChange }: BlogEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [2, 3, 4] }
      }),
      Underline,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Image,
      Link.configure({ openOnClick: false }),
    ],
    content: content?.json || content?.html || content || '',
    onUpdate: ({ editor }) => {
      onChange({ html: editor.getHTML(), json: editor.getJSON() });
    },
    editorProps: {
      attributes: {
        class: 'prose prose-slate prose-lg max-w-none focus:outline-none min-h-[500px] prose-headings:font-black prose-p:text-slate-600 prose-a:text-emerald-600',
      },
    },
  });

  useEffect(() => {
    if (editor && content && Object.keys(content).length > 0) {
      if (editor.getText().trim() === '' && editor.isEmpty) {
        editor.commands.setContent(content?.json || content?.html || content);
      }
    }
  }, [content, editor]);

  if (!editor) return null;

  const ToolbarButton = ({ onClick, isActive = false, iconName, title }: any) => (
    <button
      onClick={(e) => { e.preventDefault(); onClick(); }}
      title={title}
      className={'p-2 rounded-lg transition-colors flex items-center justify-center ' + (isActive ? 'bg-primary/10 text-primary' : 'text-slate-600 hover:bg-slate-200')}
    >
      <span className="material-symbols-outlined text-[20px]">{iconName}</span>
    </button>
  );

  return (
    <div className="flex flex-col h-full border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
      <div className="h-14 border-b border-slate-200 bg-slate-50 flex items-center px-4 gap-1 overflow-x-auto sticky top-0 z-10">
        <div className="flex items-center gap-1 border-r border-slate-200 pr-2 mr-2">
          <ToolbarButton onClick={() => editor.chain().focus().toggleBold().run()} isActive={editor.isActive('bold')} iconName="format_bold" title="Bold" />
          <ToolbarButton onClick={() => editor.chain().focus().toggleItalic().run()} isActive={editor.isActive('italic')} iconName="format_italic" title="Italic" />
          <ToolbarButton onClick={() => editor.chain().focus().toggleUnderline().run()} isActive={editor.isActive('underline')} iconName="format_underlined" title="Underline" />
        </div>
        
        <div className="flex items-center gap-1 border-r border-slate-200 pr-2 mr-2">
          <ToolbarButton onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} isActive={editor.isActive('heading', { level: 2 })} iconName="title" title="Heading 2" />
          <ToolbarButton onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} isActive={editor.isActive('heading', { level: 3 })} iconName="title" title="Heading 3" />
        </div>

        <div className="flex items-center gap-1 border-r border-slate-200 pr-2 mr-2">
          <ToolbarButton onClick={() => editor.chain().focus().toggleBulletList().run()} isActive={editor.isActive('bulletList')} iconName="format_list_bulleted" title="Bullet List" />
          <ToolbarButton onClick={() => editor.chain().focus().toggleOrderedList().run()} isActive={editor.isActive('orderedList')} iconName="format_list_numbered" title="Ordered List" />
          <ToolbarButton onClick={() => editor.chain().focus().toggleBlockquote().run()} isActive={editor.isActive('blockquote')} iconName="format_quote" title="Quote" />
        </div>

        <div className="flex items-center gap-1 border-r border-slate-200 pr-2 mr-2">
          <ToolbarButton onClick={() => editor.chain().focus().setTextAlign('left').run()} isActive={editor.isActive({ textAlign: 'left' })} iconName="format_align_left" title="Align Left" />
          <ToolbarButton onClick={() => editor.chain().focus().setTextAlign('center').run()} isActive={editor.isActive({ textAlign: 'center' })} iconName="format_align_center" title="Align Center" />
          <ToolbarButton onClick={() => editor.chain().focus().setTextAlign('right').run()} isActive={editor.isActive({ textAlign: 'right' })} iconName="format_align_right" title="Align Right" />
        </div>

        <div className="flex items-center gap-1 border-r border-slate-200 pr-2 mr-2">
          <ToolbarButton onClick={() => {
            const url = window.prompt('URL');
            if (url) editor.chain().focus().setLink({ href: url }).run();
          }} isActive={editor.isActive('link')} iconName="link" title="Link" />
          <ToolbarButton onClick={() => {
             const url = window.prompt('Image URL');
             if (url) editor.chain().focus().setImage({ src: url }).run();
          }} iconName="image" title="Image" />
          <ToolbarButton onClick={() => editor.chain().focus().setHorizontalRule().run()} iconName="horizontal_rule" title="Divider" />
        </div>

        <div className="flex items-center gap-1 ml-auto">
          <ToolbarButton onClick={() => editor.chain().focus().undo().run()} iconName="undo" title="Undo" />
          <ToolbarButton onClick={() => editor.chain().focus().redo().run()} iconName="redo" title="Redo" />
        </div>
      </div>

      <div className="p-6 flex-1 overflow-y-auto bg-white">
        <EditorContent editor={editor} className="min-h-[500px]" />
      </div>
    </div>
  );
}
