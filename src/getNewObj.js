export function getNewObj(tournaments, countries, events, newObj) {
  countries.forEach((item) => {
    newObj.push(item);
    item.tournament = [];
  });
  const getTournaments = (newObj, tournaments) => {
    newObj.forEach((item) => {
      tournaments.forEach((element) => {
        if (item.country_id === element.country_id) {
          item.tournament.push(element);
          element.event = [];
        }
      });
    });
  };
  const getEvents = (newObj, events) => {
    newObj.forEach((itemObj) => {
      events.forEach((itemEvent) => {
        itemObj.tournament.forEach((itemTour) => {
          if (itemTour.tournament_id === itemEvent.tournament_id) {
            itemTour.event.push(itemEvent);
          }
        });
      });
    });
  };
  getTournaments(newObj, tournaments);
  getEvents(newObj, events);
  return newObj;
}
