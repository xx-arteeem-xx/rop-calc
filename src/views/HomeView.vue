<script>
    import Top from "../components/Top.vue";
    import TableLoad from "../components/data/TableLoad.vue";
    import TableContingent from "../components/data/TableContingent.vue";
    import TableCash from "../components/data/TableCash.vue";
    import Instructions from "../components/Instructions.vue";
    import Calculate from "../components/Calculate.vue";
    import DashboardCards from "../components/results/DashboardCards.vue";
    import DashboardDetails from "../components/results/DashboardDetails.vue";

    export default{
        components: { Top, TableLoad, TableContingent, TableCash, Instructions, Calculate, DashboardCards, DashboardDetails },
        data(){
            return{

            }
        },
        methods: {
            triggerDemo() {
                this.$refs.demoRef1.demoData(); 
                this.$refs.demoRef2.demoData();
                this.$refs.demoRef3.demoData();
                location.href = "#data"
            },
            triggerShowRes() {
                document.getElementById("results").classList.remove("d-none");
                location.href = "#results"
            },
            triggerHideRes() {
                document.getElementById("results").classList.add("d-none");
                location.href = "#data"
            }, 
        }
    }
</script>

<template>
    <Top 
        @button-clicked="triggerDemo()"/>
    <div class="container">
        <Instructions />
        <div id="data">
            <TableLoad 
                ref="demoRef1"/>
            <TableContingent 
                ref="demoRef2"/>
            <TableCash 
                ref="demoRef3"/>
            <Calculate 
                @button-clicked1="triggerShowRes()" 
                @button-clicked2="triggerHideRes()"/>
        </div>
        <div id="results" class="d-none">
            <DashboardCards 
                :load="this.$refs.demoRef1"
                :contingent="this.$refs.demoRef2"
                :cash="this.$refs.demoRef3"/>
            <DashboardDetails 
                :load="this.$refs.demoRef1"
                :contingent="this.$refs.demoRef2"
                :cash="this.$refs.demoRef3"/>
        </div>
    </div>
</template>

<style></style>