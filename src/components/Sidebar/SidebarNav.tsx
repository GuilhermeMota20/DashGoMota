import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardFill, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
    return (
        <Stack spacing='12' align='flex-start'>
            <NavSection title="Geral">
                <NavLink href="/dashboard" title="Dashboard" icon={RiDashboardFill} />
                <NavLink href="/users" title="Usuários" icon={RiContactsLine} />
            </NavSection>

            <NavSection title="Automação">
                <NavLink href="/forms" title="Formulários" icon={RiInputMethodLine} />
                <NavLink href="/automation" title="Automação" icon={RiGitMergeLine} />
            </NavSection>
        </Stack>
    )
}