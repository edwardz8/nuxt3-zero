import * as require$$7 from 'url';
import { createClient } from '@supabase/supabase-js';

const subscribe = async (req, res) => {
  const queryObject = require$$7.parse(req.url, true).query;
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
