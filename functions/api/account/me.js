export async function onRequest(context) {
  const { request } = context;

  if (request.method !== "GET") {
    return Response.json(
      { status: "error", message: "Metode tidak diizinkan" },
      { status: 405 }
    );
  }

  return Response.json({
    app: "GIRINATAN",
    status: "waiting_authentication",
    message: "Login TikTok diperlukan untuk mengakses profil."
  });
}
