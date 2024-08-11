import { useContext, useCallback } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { LevelsContext } from "../../context/LevelsContext";

const Level = ({ name, description, levelId }) => {
  const { setSelectedLevels, selectedLevels } = useContext(LevelsContext);

  const selectLevel = useCallback(() => {
    setSelectedLevels((prevLevels) => {
      const newLevels = [...prevLevels];
      if (newLevels.includes(levelId)) {
        newLevels.splice(newLevels.indexOf(levelId), 1);
      } else {
        newLevels.push(levelId);
      }
      return newLevels;
    });
  }, [levelId, setSelectedLevels]);


  return (
    <div>
      <Card variant="outlined">
        <CardContent sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontWeight: "bold" }} variant="subtitle1">
              {name}
            </Typography>
            <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
            {selectedLevels.includes(levelId) ? (
                <span>{selectedLevels.indexOf(levelId) + 1}</span>
              ) : undefined}
              <Checkbox
                onClick={selectLevel}
                checked={selectedLevels.includes(levelId)}
              />
            </div>
          </div>
          <Typography variant="body1">{description}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Level;
