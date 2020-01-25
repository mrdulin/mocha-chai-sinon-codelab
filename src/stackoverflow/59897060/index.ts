import NetworkService from "./services";

export async function sendAPIRequest(data: any) {
  const service = new NetworkService();
  await service.call(data);
}
