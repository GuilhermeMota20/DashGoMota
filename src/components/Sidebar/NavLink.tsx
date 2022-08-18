import { Icon, Link, LinkProps, Text } from "@chakra-ui/react";
import { ElementType } from "react";
import { RiDashboardFill } from "react-icons/ri";

interface NavLinkProps extends LinkProps {
    title: string;
    icon: ElementType;
}

export function NavLink({ title, icon, ...rest }: NavLinkProps) {
    return (
        <Link display='flex' alignItems='center' {...rest}>
            <Icon as={icon} fontSize='20' />
            <Text ml='4' fontWeight='medium' >{title}</Text>
        </Link>
    )
}