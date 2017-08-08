var table = document.getElementById('main_table');

// console.log(data);

// Name
// State
// Account
// Data Center
// Cores
// CPU
// Memory
// Storage

populate_table(data);

function populate_table(data){
    var table_header = table.innerHTML;

    var output = '';
    for (var i = 0; i < data.length; i++) {
        var parsed_data = parse_raw_data(data[i]);
        var row_markup = build_row_markup(parsed_data);
        output += row_markup;
    }

    table.innerHTML = table_header + '<tbody>' + output + '</tbody>';
}

function parse_raw_data(data){
    var result = {};
    result.name = data.name || 'N/A';
    result.state = data.cmp_state || 'N/A';
    result.account = data.account.name || 'N/A';
    result.datacenter = data.location.datacenter.name || 'N/A';
    result.cores = data.cpu_cores || 'N/A';
    result.cpu = data.cpu || 'N/A';// Where is this?
    result.memory = data.ram_mb || 'N/A';
    result.storage = data.volumes_mb || 'N/A';
    return result;
}

function build_row_markup(data){

    var output = '';

    output += '<tr>';
        output += '<td class="cell_name">' + data.name + '</td>';
        output += '<td class="cell_state">' + parse_state(data.state) + '</td>';
        output += '<td class="cell_account">' + data.account + '</td>';
        output += '<td class="cell_datacenter">' + data.datacenter + '</td>';
        output += '<td class="cell_cores">' + data.cores + '</td>';
        output += '<td class="cell_cpu">' + data.cpu + '</td>';
        output += '<td class="cell_memory">' + parse_gb(data.memory) + '</td>';
        output += '<td class="cell_storage">' + parse_gb(data.storage) + '</td>';

    output += '</tr>';

    return output;
}

function parse_gb(mb){
    if (mb === 'N/A') {
        return mb;
    }
    mb = parseInt(mb);
    var gb = mb / 1024;
    var output = gb + 'GB';
    return output;
}

function parse_state(state){
    var state_class = state === 'running' ? 'running' : 'notrunning';
    var output = '<span class="state_icon ' + state_class + '"></span>';
    return output;
}