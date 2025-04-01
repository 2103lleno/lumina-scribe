
import { Layers } from 'lucide-react';

interface SidebarHeaderProps {
  collapsed: boolean;
  onToggle?: () => void;
}

const SidebarHeader = ({ collapsed, onToggle }: SidebarHeaderProps) => {
  return (
    <div 
      className="h-16 flex items-center px-4 border-b border-sidebar-border cursor-pointer bg-sidebar w-full hover:bg-sidebar-accent/10 transition-colors"
      onClick={onToggle}
    >
      {collapsed ? (
        <div className="flex justify-center w-full">
          <Layers className="text-sidebar-foreground" size={24} />
        </div>
      ) : (
        <h1 className="text-xl font-bold text-sidebar-foreground flex items-center w-full">
          <Layers className="mr-3" size={24} />
          2103 Creative
        </h1>
      )}
    </div>
  );
};

export default SidebarHeader;
