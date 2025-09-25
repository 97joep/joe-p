import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button";
import { PortableTextBlock } from "next-sanity";
import Link from "next/link";
import RichText from "@/components/ui/portable-text-copy";

export default function GatedProjectLink({ 
    name, 
    link,
    message,
} : { 
    name: string;
    link: string;
    message: PortableTextBlock[];
}) {
    return (
        <AlertDialog>
            <AlertDialogTrigger><h2 className="color-hover">{name}</h2></AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Link is gated.
                    </AlertDialogTitle>
                    <div className="prose">
                        <RichText value={message} />
                    </div>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <Button>
                        <Link href={link}>Continue</Link>
                    </Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}