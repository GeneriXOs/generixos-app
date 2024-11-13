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
import { LineChartComp } from "../components/LineChartComp/LineChartComp";
import { t } from "i18next";

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

const labels = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

const datasets = [
  {
    label: "Sales",
    data: [
      450000, 680000, 720000, 510000, 830000, 900000, 470000, 920000, 610000,
      760000, 980000, 620000, 870000, 660000, 940000,
    ],
  },
  {
    label: "Expenses",
    data: [
      410000, 500000, 440000, 620000, 580000, 710000, 460000, 530000, 480000,
      660000, 550000, 600000, 750000, 490000, 690000,
    ],
  },
  {
    label: "Costs",
    data: [
      333333, 485714, 496552, 364286, 614286, 642857, 324828, 681481, 435714,
      511111, 676552, 427586, 644444, 455172, 688889,
    ],
  },
];

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
];

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
        <Pane width="100%" height="100%">
          <LineChartComp
            labels={labels}
            datasets={datasets}
            colors={colors}
            title={titlePrincipalStats}
          />
        </Pane>
      </PrincipalChartContainer>
    </Pane>
  );
};

export default DashboardPage;
