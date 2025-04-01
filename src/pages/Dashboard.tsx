
import { useState } from 'react';
import PageHeader from '@/components/common/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart3, LineChart, PieChart, Plus, RefreshCw, Filter } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isRefreshing, setIsRefreshing] = useState(false);
  
  const handleRefresh = () => {
    setIsRefreshing(true);
    // Simulate refresh delay
    setTimeout(() => setIsRefreshing(false), 1000);
  };
  
  return (
    <div className="space-y-6">
      <PageHeader 
        title="Dashboard" 
        description="Visão geral do seu negócio"
        actions={
          <div className="flex space-x-2">
            <Button 
              size="sm" 
              variant="outline" 
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="flex items-center"
            >
              <RefreshCw className={`mr-1 h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
              Atualizar
            </Button>
            <Button size="sm" className="flex items-center">
              <Plus className="mr-1 h-4 w-4" />
              Adicionar Widget
            </Button>
          </div>
        }
      />
      
      <Tabs defaultValue="overview" className="space-y-4">
        <div className="flex items-center justify-between mb-2">
          <TabsList className="mb-0">
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="finance">Financeiro</TabsTrigger>
            <TabsTrigger value="sales">Vendas</TabsTrigger>
            <TabsTrigger value="inventory">Estoque</TabsTrigger>
          </TabsList>
          <Button variant="ghost" size="sm" className="flex items-center text-muted-foreground">
            <Filter className="mr-1 h-4 w-4" />
            Filtros
          </Button>
        </div>
        
        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Performance Cards */}
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Receita Total</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">R$ 45.231,89</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <span className="flex items-center text-green-500 mr-1">+20.1%</span> em relação ao mês anterior
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Pedidos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">356</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <span className="flex items-center text-green-500 mr-1">+12%</span> em relação ao mês anterior
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Clientes Ativos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2.103</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <span className="flex items-center text-green-500 mr-1">+5%</span> em relação ao mês anterior
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Satisfação</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">98%</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <span className="flex items-center text-green-500 mr-1">+2%</span> em relação ao mês anterior
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Charts - Garantir que tenham a mesma altura */}
            <Card className="col-span-1 h-[350px] hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg font-medium flex items-center">
                  <BarChart3 size={16} className="mr-2" />
                  Desempenho Mensal
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex items-center justify-center">
                <p className="text-sm text-muted-foreground">Gráfico de Desempenho</p>
              </CardContent>
            </Card>
            
            <Card className="col-span-1 h-[350px] hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg font-medium flex items-center">
                  <PieChart size={16} className="mr-2" />
                  Distribuição de Vendas
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex items-center justify-center">
                <p className="text-sm text-muted-foreground">Gráfico de Distribuição</p>
              </CardContent>
            </Card>
          </div>
          
          {/* Alerts Section */}
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg font-medium flex items-center">
                Alertas Prioritários
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-md border border-red-100 dark:border-red-900/30 flex items-center hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-red-500 mr-3"></div>
                  <div>
                    <p className="text-sm font-medium">Estoque crítico: Produto XYZ-123</p>
                    <p className="text-xs text-muted-foreground">Quantidade disponível: 2 unidades</p>
                  </div>
                </div>
                
                <div className="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-md border border-amber-100 dark:border-amber-900/30 flex items-center hover:bg-amber-100 dark:hover:bg-amber-900/30 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-amber-500 mr-3"></div>
                  <div>
                    <p className="text-sm font-medium">Fatura vencida: Cliente ABC Ltda</p>
                    <p className="text-xs text-muted-foreground">Valor: R$ 5.230,00 - Vencida há 5 dias</p>
                  </div>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-md border border-blue-100 dark:border-blue-900/30 flex items-center hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
                  <div>
                    <p className="text-sm font-medium">Reunião programada: Equipe de Vendas</p>
                    <p className="text-xs text-muted-foreground">Hoje às 15:00 - Sala de Conferência</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="finance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Visão Financeira</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Conteúdo da visão financeira em construção...</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="sales" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Visão de Vendas</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Conteúdo da visão de vendas em construção...</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="inventory" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Visão de Estoque</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Conteúdo da visão de estoque em construção...</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
