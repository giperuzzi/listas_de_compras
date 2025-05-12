// Importa a função de criação do client Supabase via CDN
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Cria o client com a URL e a chave fornecidas
export const supabase = createClient(
  'https://vijjnzpvtwtriocltctc.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpampuenB2dHd0cmlvY2x0Y3RjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1MzU1OTMsImV4cCI6MjA2MjExMTU5M30.QG0NmQA7sd1LhL21gcd0zY5cZXvATdnQqwtE_B6lBXI'
)