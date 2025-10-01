'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown, Minus, Users, DollarSign, Target, UserCheck } from 'lucide-react';

interface KPICardProps {
  title: string;
  value: string;
  previousValue: string;
  trend: 'up' | 'down' | 'neutral';
  trendValue: string;
  icon: React.ReactNode;
  color: string;
}

function KPICard({ title, value, previousValue, trend, trendValue, icon, color }: KPICardProps) {
  const getTrendIcon = () => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-green-600" />;
      case 'down':
        return <TrendingDown className="w-4 h-4 text-red-600" />;
      default:
        return <Minus className="w-4 h-4 text-gray-600" />;
    }
  };

  const getTrendColor = () => {
    switch (trend) {
      case 'up':
        return 'text-green-600';
      case 'down':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-600">{title}</CardTitle>
        <div className={`p-2 rounded-lg ${color}`}>
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-gray-900">{value}</div>
        <div className="flex items-center space-x-2 text-xs text-gray-600 mt-1">
          <span>vs {previousValue}</span>
          <div className="flex items-center space-x-1">
            {getTrendIcon()}
            <span className={getTrendColor()}>{trendValue}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

interface MetricRowProps {
  label: string;
  current: string;
  previous: string;
  trend: 'up' | 'down' | 'neutral';
  target?: string;
  status: 'good' | 'warning' | 'danger';
}

function MetricRow({ label, current, previous, trend, target, status }: MetricRowProps) {
  const getStatusColor = () => {
    switch (status) {
      case 'good':
        return 'bg-green-100 text-green-800';
      case 'warning':
        return 'bg-yellow-100 text-yellow-800';
      case 'danger':
        return 'bg-red-100 text-red-800';
    }
  };

  const getTrendIcon = () => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-3 h-3 text-green-600" />;
      case 'down':
        return <TrendingDown className="w-3 h-3 text-red-600" />;
      default:
        return <Minus className="w-3 h-3 text-gray-600" />;
    }
  };

  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
      <div className="flex-1">
        <span className="text-sm font-medium text-gray-900">{label}</span>
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-sm text-gray-600 w-16 text-right">{previous}</span>
        <span className="text-sm font-medium text-gray-900 w-16 text-right">{current}</span>
        <div className="flex items-center w-8 justify-center">
          {getTrendIcon()}
        </div>
        {target && (
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor()} w-20 text-center`}>
            {target}
          </span>
        )}
      </div>
    </div>
  );
}

export default function SaaSDashboard() {
  const kpiData = [
    {
      title: 'MRR (Monthly Recurring Revenue)',
      value: '$47,500',
      previousValue: '$45,200',
      trend: 'up' as const,
      trendValue: '+5.1%',
      icon: <DollarSign className="w-4 h-4" />,
      color: 'bg-green-100 text-green-600'
    },
    {
      title: 'Active Users (MAU)',
      value: '2,847',
      previousValue: '2,650',
      trend: 'up' as const,
      trendValue: '+7.4%',
      icon: <Users className="w-4 h-4" />,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'Churn Rate',
      value: '3.2%',
      previousValue: '4.1%',
      trend: 'down' as const,
      trendValue: '-0.9%',
      icon: <Target className="w-4 h-4" />,
      color: 'bg-orange-100 text-orange-600'
    },
    {
      title: 'Customer Acquisition Cost',
      value: '$127',
      previousValue: '$142',
      trend: 'down' as const,
      trendValue: '-10.6%',
      icon: <UserCheck className="w-4 h-4" />,
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  const funnelMetrics = [
    { label: 'Website Visitors', current: '8,450', previous: '7,920', trend: 'up' as const, target: '10K', status: 'warning' as const },
    { label: 'Trial Signups', current: '312', previous: '285', trend: 'up' as const, target: '350', status: 'warning' as const },
    { label: 'Activation Rate', current: '68%', previous: '65%', trend: 'up' as const, target: '75%', status: 'good' as const },
    { label: 'Trial → Paid CVR', current: '18%', previous: '16%', trend: 'up' as const, target: '22%', status: 'good' as const },
    { label: 'ARPU', current: '$67', previous: '$64', trend: 'up' as const, target: '$70', status: 'good' as const },
    { label: 'LTV:CAC Ratio', current: '3.8:1', previous: '3.2:1', trend: 'up' as const, target: '4:1', status: 'good' as const }
  ];

  const cohortData = [
    { month: 'Oct 2024', customers: 89, month1: '94%', month2: '87%', month3: '82%', month6: '76%' },
    { month: 'Sep 2024', customers: 76, month1: '92%', month2: '85%', month3: '79%', month6: '72%' },
    { month: 'Aug 2024', customers: 68, month1: '89%', month2: '81%', month3: '76%', month6: '69%' },
    { month: 'Jul 2024', customers: 71, month1: '91%', month2: '83%', month3: '78%', month6: '71%' }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
        <h3 className="text-xl font-bold text-gray-900 mb-2">📊 Dashboard SaaS — Vue d'ensemble</h3>
        <p className="text-gray-600 text-sm mb-4">
          Exemple de dashboard executif pour une SaaS B2B (données fictives). 
          Observez la structure : KPIs principaux → Funnel détaillé → Cohortes.
        </p>
        <div className="flex items-center space-x-4 text-xs text-gray-500">
          <span>📅 Période: Octobre 2024</span>
          <span>🔄 Mis à jour: il y a 2h</span>
          <span>👥 Owner: Growth Team</span>
        </div>
      </div>

      {/* KPIs Principaux */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpiData.map((kpi, index) => (
          <KPICard key={index} {...kpi} />
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Funnel AAARRR */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">🔄 Funnel AAARRR</CardTitle>
            <p className="text-sm text-gray-600">Métriques détaillées par étape</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs text-gray-500 pb-2 border-b">
                <span>Métrique</span>
                <div className="flex space-x-4">
                  <span className="w-16 text-right">M-1</span>
                  <span className="w-16 text-right">Actuel</span>
                  <span className="w-8 text-center">Trend</span>
                  <span className="w-20 text-center">Objectif</span>
                </div>
              </div>
              {funnelMetrics.map((metric, index) => (
                <MetricRow key={index} {...metric} />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Analysis de Cohorte */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">📈 Rétention par Cohorte</CardTitle>
            <p className="text-sm text-gray-600">% de clients actifs après N mois</p>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="text-gray-500 border-b">
                    <th className="text-left py-2">Cohorte</th>
                    <th className="text-center py-2">Clients</th>
                    <th className="text-center py-2">M1</th>
                    <th className="text-center py-2">M2</th>
                    <th className="text-center py-2">M3</th>
                    <th className="text-center py-2">M6</th>
                  </tr>
                </thead>
                <tbody>
                  {cohortData.map((cohort, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-2 font-medium">{cohort.month}</td>
                      <td className="text-center py-2">{cohort.customers}</td>
                      <td className="text-center py-2">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
                          {cohort.month1}
                        </span>
                      </td>
                      <td className="text-center py-2">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          {cohort.month2}
                        </span>
                      </td>
                      <td className="text-center py-2">
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                          {cohort.month3}
                        </span>
                      </td>
                      <td className="text-center py-2">
                        <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded">
                          {cohort.month6}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-xs text-gray-500">
              💡 La cohorte Oct 2024 montre une amélioration de +2% vs Sep sur M1
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Insights & Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">🎯 Insights & Actions de la semaine</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-900 mb-2">✅ Performance</h4>
              <ul className="text-sm text-green-800 space-y-1">
                <li>• MRR +5.1% grâce aux upsells</li>
                <li>• CAC réduit de 10.6% (SEO content)</li>
                <li>• Activation +3% (nouveau onboarding)</li>
              </ul>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-900 mb-2">⚠️ Points d'attention</h4>
              <ul className="text-sm text-yellow-800 space-y-1">
                <li>• Traffic en-dessous de l'objectif 10K</li>
                <li>• Trial signups: +9% mais encore 38 en retard</li>
                <li>• Churn légèrement au-dessus de 3%</li>
              </ul>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 mb-2">🚀 Actions prévues</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Test A/B landing page (ROI estimé: +15%)</li>
                <li>• Campagne LinkedIn ads (budget: $2K)</li>
                <li>• Customer success call high-risk churners</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Notes méthodologiques */}
      <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
        <h4 className="font-semibold text-gray-900 mb-2">📝 Notes méthodologiques</h4>
        <div className="grid md:grid-cols-2 gap-4 text-xs text-gray-600">
          <div>
            <strong>Définitions:</strong>
            <ul className="mt-1 space-y-1">
              <li>• MRR = revenus récurrents mensuels (normalisés)</li>
              <li>• CAC = coût d'acquisition client (marketing + sales)</li>
              <li>• Activation = 3+ actions core dans les 7 premiers jours</li>
            </ul>
          </div>
          <div>
            <strong>Calculs:</strong>
            <ul className="mt-1 space-y-1">
              <li>• LTV = ARPU × (1/churn mensuel) × marge brute</li>
              <li>• Churn = clients perdus / clients début mois</li>
              <li>• Cohortes = suivi des clients par mois d'acquisition</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
