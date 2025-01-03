import * as url from 'url';
import { createClient } from 'file:///Users/edwardz_8/vue-projects/nuxt3-zero/node_modules/@supabase/supabase-js/dist/main/index.js';

const subscribe = async (req, res) => {
  const queryObject = url.parse(req.url, true).query;
  const { SUPABASE_URL, SUPABASE_KEY } = process.env;
  try {
    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
    let response;
    const { email } = queryObject;
    if (email) {
      const { data, error } = await supabase.from("Subscriber").upsert({
        email
      });
      response = data;
    }
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(response));
    res.end();
  } catch (error) {
    console.log(error);
    res.writeHead(500, { "Content-Type": "application/json" });
    res.write(JSON.stringify(error));
    res.end();
  }
};

export { subscribe as default };
//# sourceMappingURL=subscribe.mjs.map
