
'use client';

import React, { useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Placeholder from '@tiptap/extension-placeholder';
import { Bold, Italic, Underline as UnderlineIcon, Heading2, Heading3, List, ListOrdered, Quote, AlignLeft, AlignCenter, AlignRight, Link as LinkIcon, Image as ImageIcon, Undo, Redo, Minus } from 'lucide-react';

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
      Placeholder.configure({ placeholder: 'Start typing your amazing content here...' }),
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

  const ToolbarButton = ({ onClick, isActive = false, icon: Icon, title }: any) => (
    <button
      onClick={(e) => { e.preventDefault(); onClick(); }}
      title={title}
      className={'p-2 rounded-lg transition-colors flex items-center justify-center ' + (isActive ? 'bg-emerald-100 text-emerald-700' : 'text-slate-600 hover:bg-slate-200')}
    >
      <Icon className="w-4 h-4" />
    </button>
  );

  return (
    <div className="flex flex-col h-full">
      <div className="h-14 border-b border-slate-100 bg-slate-50/50 flex items-center px-4 gap-1 overflow-x-auto sticky top-0 z-10 rounded-t-2xl">
        <div className="flex items-center gap-1 border-r border-slate-200 pr-2 mr-2">
          <ToolbarButton onClick={() => editor.chain().focus().toggleBold().run()} isActive={editor.isActive('bold')} icon={Bold} title="Bold" />
          <ToolbarButton onClick={() => editor.chain().focus().toggleItalic().run()} isActive={editor.isActive('italic')} icon={Italic} title="Italic" />
          <ToolbarButton onClick={() => editor.chain().focus().toggleUnderline().run()} isActive={editor.isActive('underline')} icon={UnderlineIcon} title="Underline" />
        </div>
        
        <div className="flex items-center gap-1 border-r border-slate-200 pr-2 mr-2">
          <ToolbarButton onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} isActive={editor.isActive('heading', { level: 2 })} icon={Heading2} title="Heading 2" />
          <ToolbarButton onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} isActive={editor.isActive('heading', { level: 3 })} icon={Heading3} title="Heading 3" />
        </div>

        <div className="flex items-center gap-1 border-r border-slate-200 pr-2 mr-2">
          <ToolbarButton onClick={() => editor.chain().focus().toggleBulletList().run()} isActive={editor.isActive('bulletList')} icon={List} title="Bullet List" />
          <ToolbarButton onClick={() => editor.chain().focus().toggleOrderedList().run()} isActive={editor.isActive('orderedList')} icon={ListOrdered} title="Ordered List" />
          <ToolbarButton onClick={() => editor.chain().focus().toggleBlockquote().run()} isActive={editor.isActive('blockquote')} icon={Quote} title="Quote" />
        </div>

        <div className="flex items-center gap-1 border-r border-slate-200 pr-2 mr-2">
          <ToolbarButton onClick={() => editor.chain().focus().setTextAlign('left').run()} isActive={editor.isActive({ textAlign: 'left' })} icon={AlignLeft} title="Align Left" />
          <ToolbarButton onClick={() => editor.chain().focus().setTextAlign('center').run()} isActive={editor.isActive({ textAlign: 'center' })} icon={AlignCenter} title="Align Center" />
          <ToolbarButton onClick={() => editor.chain().focus().setTextAlign('right').run()} isActive={editor.isActive({ textAlign: 'right' })} icon={AlignRight} title="Align Right" />
        </div>

        <div className="flex items-center gap-1 border-r border-slate-200 pr-2 mr-2">
          <ToolbarButton onClick={() => {
            const url = window.prompt('URL');
            if (url) editor.chain().focus().setLink({ href: url }).run();
          }} isActive={editor.isActive('link')} icon={LinkIcon} title="Link" />
          <ToolbarButton onClick={() => {
             const url = window.prompt('Image URL (Will implement Supabase Upload later)');
             if (url) editor.chain().focus().setImage({ src: url }).run();
          }} icon={ImageIcon} title="Image" />
          <ToolbarButton onClick={() => editor.chain().focus().setHorizontalRule().run()} icon={Minus} title="Divider" />
        </div>

        <div className="flex items-center gap-1 ml-auto">
          <ToolbarButton onClick={() => editor.chain().focus().undo().run()} icon={Undo} title="Undo" />
          <ToolbarButton onClick={() => editor.chain().focus().redo().run()} icon={Redo} title="Redo" />
        </div>
      </div>

      <div className="p-8 flex-1 overflow-y-auto bg-white rounded-b-2xl">
        <EditorContent editor={editor} className="min-h-full" />
      </div>
    </div>
  );
}
