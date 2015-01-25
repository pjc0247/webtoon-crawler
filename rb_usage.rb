def run cmd, *args
  IO.popen([cmd, *args]) do |io|
    return io.read
  end
end

puts run "casperjs", "crawl-rank.js"
