import {
  faBagShopping,
  faCashRegister,
  faFileInvoiceDollar,
  faMoneyBillTrendUp,
} from "@fortawesome/free-solid-svg-icons";
import { Pane } from "evergreen-ui";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import StatsPaneComp from "../components/StatsPaneComp/StatsPaneComp"; // Importar el nuevo componente
import { t } from "i18next";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "1", sales: 450000, expenses: 410000, costs: 333333 },
  { name: "2", sales: 680000, expenses: 500000, costs: 485714 },
  { name: "3", sales: 720000, expenses: 440000, costs: 496552 },
  { name: "4", sales: 510000, expenses: 620000, costs: 364286 },
  { name: "5", sales: 830000, expenses: 580000, costs: 614286 },
  { name: "6", sales: 900000, expenses: 710000, costs: 642857 },
  { name: "7", sales: 470000, expenses: 460000, costs: 324828 },
  { name: "8", sales: 920000, expenses: 530000, costs: 681481 },
  { name: "9", sales: 610000, expenses: 480000, costs: 435714 },
  { name: "10", sales: 760000, expenses: 660000, costs: 511111 },
  { name: "11", sales: 980000, expenses: 550000, costs: 676552 },
  { name: "12", sales: 620000, expenses: 600000, costs: 427586 },
  { name: "13", sales: 870000, expenses: 750000, costs: 644444 },
  { name: "14", sales: 660000, expenses: 490000, costs: 455172 },
  { name: "15", sales: 940000, expenses: 690000, costs: 688889 },
  { name: "16", sales: 670000, expenses: 570000, costs: 489000 },
  { name: "17", sales: 720000, expenses: 640000, costs: 512000 },
  { name: "18", sales: 850000, expenses: 620000, costs: 584000 },
  { name: "19", sales: 910000, expenses: 580000, costs: 601000 },
  { name: "20", sales: 930000, expenses: 670000, costs: 623333 },
  { name: "21", sales: 780000, expenses: 540000, costs: 519000 },
  { name: "22", sales: 850000, expenses: 610000, costs: 567143 },
  { name: "23", sales: 880000, expenses: 700000, costs: 594286 },
  { name: "24", sales: 650000, expenses: 540000, costs: 498333 },
  { name: "25", sales: 930000, expenses: 750000, costs: 652000 },
  { name: "26", sales: 720000, expenses: 590000, costs: 512143 },
  { name: "27", sales: 800000, expenses: 680000, costs: 565333 },
  { name: "28", sales: 890000, expenses: 620000, costs: 606667 },
  { name: "29", sales: 920000, expenses: 690000, costs: 629000 },
  { name: "30", sales: 950000, expenses: 740000, costs: 650000 },
];

const PrincipalStatsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 0;
`;

const PrincipalChartContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  height: 60%;
  margin: 0;
  padding: 0;
  position: relative;
`;

const colors = [
  {
    borderColor: "--success-alert",
    backgroundColor: "--success-alert-extra-soft",
  },
  {
    borderColor: "--danger-alert",
    backgroundColor: "--danger-alert-extra-soft",
  },
  {
    borderColor: "--info-alert",
    backgroundColor: "--info-alert-extra-soft",
  },
  {
    gridColor: "--deep-color",
  },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label}`}</p>
        <p className="label">{`Sales : ${formatCurrency(
          payload[0].value,
          COP
        )}`}</p>

        <p className="label">{`Expenses : ${formatCurrency(
          payload[1].value,
          COP
        )}`}</p>
        <p className="label">{`Costs : ${formatCurrency(
          payload[2].value,
          COP
        )}`}</p>
      </div>
    );
  }

  return null;
};

const formatCurrency = (value, currency, typeFormat = "short") => {
  if (isNaN(value)) {
    return "El valor proporcionado no es numérico";
  }
  const numericValue = parseFloat(value);

  if (typeFormat === "short") {
    return (
      ` ${currency.symbol}` +
      new Intl.NumberFormat("es-ES", {
        style: "currency",
        currencyDisplay: "symbol",
        currencyCode: "COP",
        minimumFractionDigits: 0,
        currency: currency.abbreviation,
      }).format(numericValue)
    );
  } else if (typeFormat === "long") {
    return (
      ` ${currency.symbol}` +
      new Intl.NumberFormat("es-ES", {
        style: "currency",
        currencyDisplay: "symbol",
        currency: currency.abbreviation,
        minimumFractionDigits: 2,
      }).format(numericValue)
    );
  } else {
    return (
      ` ${currency.symbol}` +
      new Intl.NumberFormat("es-ES", {
        style: "currency",
        currencyDisplay: "symbol",
        currency: currency.abbreviation,
        minimumFractionDigits: 2,
      }).format(numericValue)
    );
  }
};

const COP = {
  symbol: "$",
  name: "Peso Colombiano",
  abbreviation: "COP",
  country: "Colombia",
};

const titlePrincipalStats = t(
  "generixos-app-page-dashboard-stats-principal-title"
);

const DashboardPage = () => {
  const { t } = useTranslation();

  return (
    <Pane
      maxWidth="100%"
      display="block"
      height="100%"
      border="none"
      overflowY="scroll"
      position="relative"
      margin={0}
      padding={0}
    >
      <PrincipalStatsContainer>
        <StatsPaneComp
          icon={faCashRegister}
          title={t("generixos-app-page-dashboard-stats-title-today-sales")}
          amount="$850.000"
          subCents="00"
          progress={80}
          progressMessage={t(
            "generixos-app-page-dashboard-stats-progress-bar-message-day-sales"
          )}
          bgColor="var(--success-alert)"
        />
        <StatsPaneComp
          icon={faMoneyBillTrendUp}
          title={t("generixos-app-page-dashboard-stats-title-month-sales")}
          amount="$6'900.000"
          subCents="00"
          progress={20}
          progressMessage={t(
            "generixos-app-page-dashboard-stats-progress-bar-message-month-sales"
          )}
          bgColor="var(--info-alert)"
        />
        <StatsPaneComp
          icon={faBagShopping}
          title={t("generixos-app-page-dashboard-stats-title-today-expenses")}
          amount="$68.750"
          subCents="00"
          progress={20}
          progressMessage={t(
            "generixos-app-page-dashboard-stats-progress-bar-message-day-expenses-down"
          )}
          trend="down"
          bgColor="var(--warning-alert)"
        />
        <StatsPaneComp
          icon={faFileInvoiceDollar}
          title={t("generixos-app-page-dashboard-stats-title-month-expenses")}
          amount="$785.500"
          subCents="00"
          progress={60}
          progressMessage={t(
            "generixos-app-page-dashboard-stats-progress-bar-message-month-expenses-up"
          )}
          trend="up"
          bgColor="var(--danger-alert)"
        />
      </PrincipalStatsContainer>
      <PrincipalChartContainer>
        <Pane width="80%" height="100%">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              width={600}
              height={300}
              data={data}
              margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
              <CartesianGrid
                stroke={getComputedStyle(
                  document.documentElement
                ).getPropertyValue(colors[0].gridColor)}
                strokeDasharray="3 3"
              />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />

              <Area
                type="monotone"
                dataKey="sales"
                stroke={getComputedStyle(
                  document.documentElement
                ).getPropertyValue(colors[0].borderColor)}
                fill={getComputedStyle(
                  document.documentElement
                ).getPropertyValue(colors[0].backgroundColor)}
              />
              <Area
                type="monotone"
                dataKey="expenses"
                stroke={getComputedStyle(
                  document.documentElement
                ).getPropertyValue(colors[1].borderColor)}
                fill={getComputedStyle(
                  document.documentElement
                ).getPropertyValue(colors[1].backgroundColor)}
              />
              <Area
                type="monotone"
                dataKey="costs"
                stroke={getComputedStyle(
                  document.documentElement
                ).getPropertyValue(colors[2].borderColor)}
                fill={getComputedStyle(
                  document.documentElement
                ).getPropertyValue(colors[2].backgroundColor)}
              />
            </AreaChart>
          </ResponsiveContainer>
        </Pane>
      </PrincipalChartContainer>
    </Pane>
  );
};

export default DashboardPage;
