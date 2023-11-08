import { rest } from "msw";

const baseURL = "https://travel-social-backend-87f0ae7bbbb1.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 1,
        username: "admin",
        email: "bryn.wheeler@gmail.com",
        first_name: "",
        last_name: "",
        profile_id: 1,
        profile_image:
          "https://res.cloudinary.com/share-the-plate-cloud/image/upload/v1/media/../default_profile_hqggnr",
      })
    );
  }),

  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
