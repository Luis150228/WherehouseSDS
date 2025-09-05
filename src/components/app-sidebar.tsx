// src/components/app-sidebar.tsx
import { Home, CreditCard, Shield, HelpCircle } from 'lucide-react';

import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarRail,
} from './animate-ui/radix/sidebar';

const items = [
	{ title: 'Panel', url: '#', icon: Home },
	{ title: 'Tarjetas', url: '#', icon: CreditCard },
	{ title: 'Seguros', url: '#', icon: Shield },
	{ title: 'Ayuda', url: '#', icon: HelpCircle },
];

export function AppSidebar() {
	return (
		<Sidebar
			side='left'
			variant='sidebar'
			collapsible='icon'
			// Animate UI extras (opcionales, ya traen defaults):
			// transition={{ type: "spring", stiffness: 320, damping: 30 }}
			// animateOnHover={true}
			// containerClassName="backdrop-blur-sm"
		>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton asChild>
							<a href='#'>
								<span className='font-semibold'>Tu App</span>
							</a>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>

			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Navegación</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild>
										<a
											href={item.url}
											aria-label={item.title}>
											<item.icon />
											<span>{item.title}</span>
										</a>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>

			<SidebarFooter>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton asChild>
							<a href='#perfil'>Perfil</a>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarFooter>

			<SidebarRail />
		</Sidebar>
	);
}
