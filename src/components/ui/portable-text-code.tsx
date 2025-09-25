import { PortableText, type PortableTextComponents } from "next-sanity"

const CodeBlock = ({
    value
}: {
    value: {
        code?: string;
        language?: string;
        filename?: string;
    }
}) => {
    return (
        <div className="not-prose">
            <pre className="overflow-x-auto p-3 text-sm text-wrap">
                <code>
                    {value.code}
                </code>
            </pre>
        </div>
    )
}

export const ptComponents: PortableTextComponents = {
    types: { 
        codeBlock: CodeBlock,
        code: CodeBlock, 
    },
}

export default function RichTextCode({value}: {value: any}) {
    return <PortableText value={value} components={ptComponents} />
}