import { partnerDao } from "./AppFactory";
import ErrorResponse from "./ErrorResponse";

type Route = any;

const constants = {
  ERROR_LINK: "ERROR_LINK",
};

export const GetPartnerByPKController: Route = async (req, res) => {
  console.debug("Entering GetPartnerByPKController()");
  let uuid = req.params.uuid;
  console.time("TimeTaken:DBCall:");
  console.log("Entering GetPartnerByPKController()" + uuid);
  await partnerDao
    .getPartnerByUuid(uuid)
    .then((result) => {
      if (result != undefined) {
        res.status(200).send(result);
      } else {
        console.info("Partner for the uuid:" + uuid + " was not found");
        res
          .status(404)
          .send(new ErrorResponse("Partner not found", "404.1.100", constants.ERROR_LINK + "404.1.100", []));
      }
    })
    .catch((error) => {
      console.log("Error in accessing GetPartnerByPK API", JSON.stringify(error));
      console.error("Error in accessing GetPartnerByPK API", JSON.stringify(error));
      res
        .status(500)
        .send(
          new ErrorResponse("Internal Server Error", "500.1.103", constants.ERROR_LINK + "500.1.103", [
            JSON.stringify(error.message),
          ]),
        );
    });
  console.timeEnd("TimeTaken:DBCall:");
  console.debug("Leaving GetPartnerByPKController()");
};
