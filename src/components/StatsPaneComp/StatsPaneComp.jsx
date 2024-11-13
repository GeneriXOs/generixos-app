import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Text, Tooltip } from "evergreen-ui";
import { Progress } from "@chakra-ui/react";
import {
  StatsPane,
  TextAmount,
  TextSubCents,
  TextTitle,
} from "./StatsPaneCompStyled";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

const StatsPaneComp = ({
  icon,
  title,
  amount,
  subCents,
  progress,
  progressMessage,
  trend,
  bgColor,
}) => {
  return (
    <StatsPane elevation={3} bgColor={bgColor}>
      <div className={`DecoIcon ${trend}`}>
        <FontAwesomeIcon className="IconFont" icon={icon} />
      </div>
      <TextTitle>{title}</TextTitle>
      <TextAmount>
        {amount}
        <TextSubCents>,{subCents}</TextSubCents>
      </TextAmount>
      <Tooltip content={progress + "%" + progressMessage} position="bottom">
        {trend === "up" || trend === "down" ? (
          <div className="Progress">
            <div className={`ProgressContent ${trend}`}>
              <FontAwesomeIcon
                className="ProgressIcon"
                icon={trend === "up" ? faCaretUp : faCaretDown}
              />
              <Text className="ProgressText">{progress}%</Text>
            </div>
          </div>
        ) : (
          <Progress
            className="Progress"
            value={progress}
            colorScheme="green"
            size="sm"
            borderRadius="0.5rem"
          />
        )}
      </Tooltip>
    </StatsPane>
  );
};

export default StatsPaneComp;
